import { cn } from '~/lib/utils';
import {
	Accordion,
	AccordionContent,
	AccordionHeader,
	AccordionItem,
} from '../accordion';
import CategoryHeader from './components/CategoryHeader';
import CategoryContent from './components/CategoryContent';

const Details = ({ feedback }: { feedback: Feedback }) => {
	return (
		<div className="flex flex-col gap-4 w-full">
			<Accordion>
				<AccordionItem id="scannability">
					<AccordionHeader itemId="scannability">
						<CategoryHeader
							title="Scannability"
							categoryScore={feedback.scannability.score}
						/>
					</AccordionHeader>
					<AccordionContent itemId="scannability">
						<CategoryContent tips={feedback.scannability.tips} />
					</AccordionContent>
				</AccordionItem>
				<AccordionItem id="bullet-point-quality">
					<AccordionHeader itemId="bullet-point-quality">
						<CategoryHeader
							title="Bullet Point Quality"
							categoryScore={feedback.bulletPointQuality.score}
						/>
					</AccordionHeader>
					<AccordionContent itemId="bullet-point-quality">
						<CategoryContent tips={feedback.bulletPointQuality.tips} />
					</AccordionContent>
				</AccordionItem>
				<AccordionItem id="role-alignment">
					<AccordionHeader itemId="role-alignment">
						<CategoryHeader
							title="Role Alignment"
							categoryScore={feedback.roleAlignment.score}
						/>
					</AccordionHeader>
					<AccordionContent itemId="role-alignment">
						<CategoryContent tips={feedback.roleAlignment.tips} />
					</AccordionContent>
				</AccordionItem>
				<AccordionItem id="presentation-clarity">
					<AccordionHeader itemId="presentation-clarity">
						<CategoryHeader
							title="Presentation & Clarity"
							categoryScore={feedback.presentationAndClarity.score}
						/>
					</AccordionHeader>
					<AccordionContent itemId="presentation-clarity">
						<CategoryContent tips={feedback.presentationAndClarity.tips} />
					</AccordionContent>
				</AccordionItem>
				<AccordionItem id="skills">
					<AccordionHeader itemId="skills">
						<CategoryHeader
							title="Skills"
							categoryScore={feedback.skills.score}
						/>
					</AccordionHeader>
					<AccordionContent itemId="skills">
						<CategoryContent tips={feedback.skills.tips} />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default Details;
