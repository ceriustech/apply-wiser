import ScoreGauge from './components/score_gauge';
import Category from './components/category';

const Summary = ({ feedback }: { feedback: Feedback }) => {
	return (
		<div className="bg-white rounded-2xl shadow-md w-full">
			<div className="flex flex-row items-center p-4 gap-8">
				<ScoreGauge score={feedback.overallScore} />

				<div className="flex flex-col gap-2">
					<h2 className="text-2xl font-bold">Your Resume Score</h2>
					<p className="text-sm text-gray-500">
						This score is calculated based on the variables listed below.
					</p>
				</div>
			</div>

			<Category
				title="Scannability"
				score={feedback.scannability.score}
				weight="20%"
			/>
			<Category
				title="Bullet Point Quality"
				score={feedback.statementQuality.score}
				weight="25%"
			/>
			<Category
				title="Role Alignment"
				score={feedback.roleAlignment.score}
				weight="40%"
			/>
			<Category
				title="Presentation & Clarity"
				score={feedback.presentationAndClarity.score}
				weight="15%"
			/>
			<Category title="Skills" score={feedback.skills.score} />
		</div>
	);
};

export default Summary;
