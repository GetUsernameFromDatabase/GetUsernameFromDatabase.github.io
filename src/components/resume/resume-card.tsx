import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export interface ResumeCardProperties {
  title: string;
  description: string;
  iconClassName?: string;
  children?: React.ReactNode;
}

// Maybe at some point change to AboutWhatIDoCard orsm
const ResumeCard: React.FC<ResumeCardProperties> = ({ ...properties }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">{properties.title}</CardTitle>
        <CardDescription>{properties.description}</CardDescription>
      </CardHeader>
      <CardContent>{properties.children}</CardContent>
    </Card>
  );
};

export default ResumeCard;
