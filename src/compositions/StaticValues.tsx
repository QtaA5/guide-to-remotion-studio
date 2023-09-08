import {zColor} from '@remotion/zod-types';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {z} from 'zod';

export const staticValueSchema = z.object({
	fontColor: zColor(),
	numberValue: z.number(),
	arrayValue: z.array(z.string()),
	enumValue: z.enum(['1.jpg', '2.jpg', '3.jpg', '4.jpg']),
	dateValue: z.date(),
});

export const StaticValues: React.FC<z.infer<typeof staticValueSchema>> = ({
	fontColor: prop1,
	numberValue: prop2,
	arrayValue: prop3,
	enumValue: prop4,
	dateValue: prop5,
}) => {
	const frame = useCurrentFrame();

	const opacity = Math.min(1, frame / 60);

	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'white',
				fontSize: 80,
				color: prop1,
			}}
		>
			<div style={{opacity: opacity, padding: '20px', border: 'solid'}}>
				Hello World!
			</div>
			<div style={{opacity: opacity, padding: '20px', border: 'solid'}}>
				Prop Number: {prop2}
			</div>
			<div style={{opacity: opacity, padding: '20px', border: 'solid'}}>
				array: {prop3 && prop3.map((value) => <div>{value}</div>)}
			</div>
			<div style={{opacity: opacity, padding: '20px', border: 'solid'}}>
				enumValue: {prop4}
			</div>
			<div style={{opacity: opacity, padding: '20px', border: 'solid'}}>
				dateValue: {prop5.toLocaleDateString()}
			</div>
		</AbsoluteFill>
	);
};

export default StaticValues;
