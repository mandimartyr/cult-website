export const engagementOptions = [
  'Attention Audit',
  'Growth Build',
  'CULT. Partner',
  'Not sure yet',
] as const;

export type EngagementOption = (typeof engagementOptions)[number];

const engagementAliases: Record<string, EngagementOption> = {
  Audit: 'Attention Audit',
  Build: 'Growth Build',
  Partner: 'CULT. Partner',
  'Attention Audit': 'Attention Audit',
  'Growth Build': 'Growth Build',
  'CULT. Partner': 'CULT. Partner',
  'Not sure yet': 'Not sure yet',
};

export function normalizeEngagement(value: string | null | undefined) {
  if (!value) return '';
  return engagementAliases[value.trim()] ?? '';
}

export type Enquiry = {
  name: string;
  email: string;
  needs: string;
  company?: string;
  website?: string;
  now?: string;
  investment?: string;
  timing?: string;
  notes?: string;
  engagement?: string;
};
export function validateEnquiry(
  data: Pick<Enquiry, 'name' | 'email' | 'needs' | 'engagement'>,
) {
  const errors: Partial<
    Record<'name' | 'email' | 'needs' | 'engagement', string>
  > = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = 'Please enter a valid email address.';
  if (!data.needs.trim()) errors.needs = 'Tell us what you want to change.';
  if (!normalizeEngagement(data.engagement ?? ''))
    errors.engagement = 'Choose how you want to start.';
  return errors;
}
export function buildEnquiry(data: Enquiry) {
  const engagement = normalizeEngagement(data.engagement) || data.engagement;
  const fields: [string, string | undefined][] = [
    ['Name', data.name],
    ['Email', data.email],
    ['Company / Brand', data.company],
    ['Website', data.website],
    ['How do you want to start?', engagement],
    ['What needs to move?', data.needs],
    ['What are you doing now?', data.now],
    ['Approximate investment', data.investment],
    ['Ideal timing', data.timing],
    ['Anything else we should know?', data.notes],
  ];
  const body = fields
    .filter(([, value]) => value?.trim())
    .map(([label, value]) => `${label}: ${value!.trim()}`)
    .join('\n\n');
  const subject = `Project enquiry${data.company?.trim() ? ` — ${data.company.trim().replace(/[\r\n]/g, ' ')}` : ''}`;
  return {
    body,
    subject,
    href: `mailto:hello@cultmedia.house?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
export function shouldAutoplay({
  reducedMotion,
  saveData,
  mobile,
  slow,
}: {
  reducedMotion: boolean;
  saveData: boolean;
  mobile: boolean;
  slow: boolean;
}) {
  return !reducedMotion && !saveData && !mobile && !slow;
}
