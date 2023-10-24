import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export interface ResumeCardProperties {
  title: string;
  description?: string;
  rootClassName?: string;
  cardHeaderClassName?: string;
  cardContentClassName?: string;
  children?: React.ReactNode;
}

// Maybe at some point change to AboutWhatIDoCard orsm
const ResumeCard: React.FC<ResumeCardProperties> = ({ ...properties }) => {
  return (
    <Card className={properties.rootClassName}>
      <CardHeader className={properties.cardHeaderClassName}>
        <CardTitle className="flex items-center">{properties.title}</CardTitle>
        {properties.description && (
          <CardDescription>{properties.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className={properties.cardContentClassName}>
        {properties.children}
      </CardContent>
    </Card>
  );
};

export default ResumeCard;
