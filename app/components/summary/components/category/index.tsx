import ScoreBadge from '../score_badge';

const Category = ({
	title,
	score,
	weight,
}: {
	title: string;
	score: number;
	weight?: string;
}) => {
	const textColor =
		score > 70
			? 'text-green-600'
			: score > 49
				? 'text-yellow-600'
				: 'text-red-600';

	return (
		<div className="resume-summary">
			<div className="category">
				<div className="flex flex-row gap-2 items-center justify-center">
					<p className="text-2xl">{title}</p>
					{weight && (
						<span className="text-sm text-gray-400 font-normal">
							({weight})
						</span>
					)}
					<ScoreBadge score={score} />
				</div>
				<p className="text-2xl">
					<span className={textColor}>{score}</span>/100
				</p>
			</div>
		</div>
	);
};

export default Category;
