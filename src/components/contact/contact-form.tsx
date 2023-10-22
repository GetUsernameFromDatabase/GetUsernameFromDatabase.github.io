import { useTranslation } from 'react-i18next';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

import { capitalizeWords } from '@/utils/string-manipulation';

interface ContactViaMailFormProperties {
  recipientEmail: string;
}

const ContactViaMailForm: React.FC<ContactViaMailFormProperties> = ({
  ...properties
}) => {
  const { t } = useTranslation();
  return (
    <form
      className="mx-auto rounded-lg bg-primary-foreground p-4 shadow-lg"
      action={`mailto:${properties.recipientEmail}`}
    >
      <div className="mb-4">
        <Label htmlFor="subject" className="font-semibold">
          {capitalizeWords(t('forms.subject', { ns: 'common' }))}
        </Label>
        <Input type="text" name="subject" required />
      </div>
      <div className="mb-4">
        <Label htmlFor="body" className="font-semibold">
          {capitalizeWords(t('forms.body', { ns: 'common' }))}
        </Label>
        <Textarea id="body" name="body" required />
      </div>
      <Button
        type="submit"
        title={t('forms.send-email-tooltip', { ns: 'common' })}
        className="w-full"
      >
        {t('forms.send-email', { ns: 'common' })}
      </Button>
    </form>
  );
};

export default ContactViaMailForm;
