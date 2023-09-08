import {Composition} from 'remotion';
import {
	HelloWorld,
	helloWorldSchema,
} from './compositions/HelloWorld/HelloWorld';
import {Logo, logoSchema} from './compositions/Logo';
import StaticValues, {staticValueSchema} from './compositions/StaticValues';
import {HarveyPicture, harveyPictureSchema} from './compositions/HarveyPicture';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				schema={helloWorldSchema}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: '#000000',
					logoColor1: '#91EAE4',
					logoColor2: '#86A8E7',
				}}
			/>
			<Composition
				id="OnlyLogo"
				component={Logo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				schema={logoSchema}
				defaultProps={{
					logoColor1: '#91dAE2' as const,
					logoColor2: '#86A8E7' as const,
				}}
			/>
			<Composition
				id="StaticValues"
				component={StaticValues}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				schema={staticValueSchema}
				defaultProps={{
					fontColor: '#0c0d0d',
					numberValue: 4,
					arrayValue: ['one', 'two', 'three'],
					enumValue: '4.jpg' as const,
					dateValue: new Date('2023-09-15T18:09:01.793Z'),
				}}
			/>
			<Composition
				id="HarveyPicture"
				component={HarveyPicture}
				durationInFrames={1000}
				fps={30}
				width={1920}
				height={1080}
				schema={harveyPictureSchema}
				defaultProps={{
					titleText: 'Harvey!',
					titleColor: '#22c943',
					imageName: '1.jpg' as const,
				}}
			/>
		</>
	);
};
