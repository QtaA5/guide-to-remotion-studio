import {zColor} from '@remotion/zod-types';
import {
	AbsoluteFill,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {z} from 'zod';

export const harveyPictureSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	imageName: z.enum(['1.jpg', '2.jpg', '3.jpg', '4.jpg']),
});

const title: React.CSSProperties = {
	fontWeight: 'bold',
	fontSize: 30,
	textAlign: 'center',
	position: 'absolute',
	// bottom: 160,
	width: '100%',
};

const word: React.CSSProperties = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block',
};

export const HarveyPicture: React.FC<{
	imageName: string;
	titleText: string;
	titleColor: string;
}> = ({imageName: prop1, titleText: prop2, titleColor: prop3}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = prop2.split(' ');

	const scale = spring({
		frame,
		config: {
			mass: 0.5,
		},
		fps: videoConfig.fps,
	});

	const logoRotation = interpolate(
		frame,
		[0, videoConfig.durationInFrames],
		[-5, 5]
	);

	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(${scale}) rotate(${logoRotation}deg)`,
				}}
			>
				<h1 style={title}>
					{words.map((t, i) => {
						const scale = spring({
							fps: videoConfig.fps,
							frame: frame,
							config: {
								damping: 200,
							},
						});

						return (
							<span
								key={t}
								style={{
									...word,
									color: prop3,
									transform: `scale(${scale})`,
								}}
							>
								{t}
							</span>
						);
					})}
				</h1>
				<img src={staticFile(prop1)} />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
