import type { LegalContent } from '../i18n/types';

const legal = {
  imprint: {
    metaTitle: 'Imprint | Hoesch@Home',
    metaDescription: 'Imprint for Hoesch@Home.',
    eyebrow: 'Legal',
    heading: 'Imprint',
    sections: [
      {
        heading: 'Information according to Section 5 DDG',
        blocks: [
          {
            type: 'paragraph',
            html: 'Hoesch Beteiligungsverwaltung GmbH<br />Zellerstrasse 29<br />82067 Ebenhausen<br />Germany',
          },
        ],
      },
      {
        heading: 'Represented by',
        blocks: [{ type: 'paragraph', html: 'Managing Director: Michael Hoesch' }],
      },
      {
        heading: 'Contact',
        blocks: [
          {
            type: 'paragraph',
            html: '+49 172 8370525<br />Email: <a class="underline decoration-current underline-offset-2" href="mailto:michael.hoesch@lifebond.de">michael.hoesch@lifebond.de</a>',
          },
        ],
      },
      {
        heading: 'Commercial Register',
        blocks: [
          {
            type: 'paragraph',
            html: 'Register court: Munich Local Court<br />Registration number: HRB 139800',
          },
        ],
      },
      {
        heading: 'VAT ID',
        blocks: [
          {
            type: 'paragraph',
            html: 'VAT identification number according to Section 27a German VAT Act: DE259911362',
          },
        ],
      },
      {
        heading: 'Responsible for content according to Section 18 para. 2 MStV',
        blocks: [
          {
            type: 'paragraph',
            html: 'Michael Hoesch<br />Zellerstrasse 29<br />82067 Ebenhausen<br />Germany',
          },
        ],
      },
    ],
  },
  privacy: {
    metaTitle: 'Privacy Policy | Hoesch@Home',
    metaDescription: 'Privacy policy for Hoesch@Home.',
    eyebrow: 'Legal',
    heading: 'Privacy Policy',
    sections: [
      {
        heading: '1. Controller',
        blocks: [
          {
            type: 'paragraph',
            html: 'The controller responsible for data processing on this website is:',
          },
          {
            type: 'paragraph',
            html: 'Hoesch Beteiligungsverwaltung GmbH<br />Zellerstrasse 29<br />82067 Ebenhausen<br />Germany<br />Phone: +49 172 8370525<br />Email: <a class="underline decoration-current underline-offset-2" href="mailto:michael.hoesch@lifebond.de">michael.hoesch@lifebond.de</a>',
          },
        ],
      },
      {
        heading: '2. General information on data processing',
        blocks: [
          {
            type: 'paragraph',
            html: 'The protection of your personal data is important to us. We process personal data exclusively within the framework of the applicable data protection regulations, in particular the General Data Protection Regulation (GDPR).',
          },
          {
            type: 'paragraph',
            html: 'Personal data means any information relating to an identified or identifiable natural person.',
          },
        ],
      },
      {
        heading: '3. Accessing the website',
        blocks: [
          {
            type: 'paragraph',
            html: 'When this website is accessed, technically necessary data is processed in order to provide the website and to ensure its stability and security.',
          },
          {
            type: 'paragraph',
            html: 'The following data in particular may be processed:',
          },
          {
            type: 'list',
            items: [
              'IP address',
              'Date and time of access',
              'Requested content',
              'Browser type and browser version',
              'Operating system used',
              'Referrer URL',
              'Device, session, and connection information',
            ],
          },
          {
            type: 'paragraph',
            html: '<strong>Legal basis:</strong> Art. 6 para. 1 lit. f GDPR<br /><strong>Legitimate interest:</strong> secure, stable, and technically error-free provision of the website. In its Privacy Statement, GitHub specifically names IP, device, session, and request data as processed categories.',
          },
        ],
      },
      {
        heading: '4. Hosting via GitHub Pages',
        blocks: [
          {
            type: 'paragraph',
            html: 'This website is provided via <strong>GitHub Pages</strong>. The provider is:',
          },
          {
            type: 'paragraph',
            html: '<strong>GitHub, Inc.</strong><br />88 Colin P. Kelly Jr. Street<br />San Francisco, CA 94107<br />USA',
          },
          {
            type: 'paragraph',
            html: 'When visiting this website, technically necessary personal data may be processed by GitHub, in particular for delivering the website and ensuring the security and integrity of the services. GitHub describes this in its privacy policy.',
          },
          {
            type: 'paragraph',
            html: 'Further information on data processing by GitHub can be found in GitHub’s privacy notice.',
          },
        ],
      },
      {
        heading: '5. Domain and DNS services by Host Europe',
        blocks: [
          {
            type: 'paragraph',
            html: 'The domain for this website is provided via <strong>Host Europe</strong>. In connection with domain provision and DNS resolution, technically necessary data may be processed insofar as this is required for the accessibility and secure provision of the website.',
          },
          { type: 'paragraph', html: 'The provider is:' },
          {
            type: 'paragraph',
            html: '<strong>Host Europe GmbH</strong><br /><strong>[Anschrift optional ergänzen]</strong>',
          },
          {
            type: 'paragraph',
            html: '<strong>Legal basis:</strong> Art. 6 para. 1 lit. f GDPR<br /><strong>Legitimate interest:</strong> technical provision, accessibility, and system security of the website.',
          },
        ],
      },
      {
        heading: '6. Integration of the Smoobu booking tool',
        blocks: [
          {
            type: 'paragraph',
            html: 'A booking widget from <strong>Smoobu</strong> is integrated on this website. The provider is:',
          },
          {
            type: 'paragraph',
            html: '<strong>Smoobu GmbH</strong><br />Pappelallee 78/79<br />10437 Berlin<br />Germany',
          },
          {
            type: 'paragraph',
            html: 'If you use the booking widget, personal data may be processed, in particular:',
          },
          {
            type: 'list',
            items: [
              'Name',
              'Contact details',
              'Booking and stay data',
              'Accommodation booking details',
              'Technical usage data',
            ],
          },
          {
            type: 'paragraph',
            html: 'Processing takes place for the provision of the booking function, the handling of booking inquiries, and the initiation and performance of accommodation contracts.',
          },
          {
            type: 'paragraph',
            html: 'An <strong>agreement on commissioned processing pursuant to Art. 28 GDPR</strong> is in place with Smoobu. Smoobu provides a corresponding DPA and points out that the website operator must transparently inform data subjects about the processing.',
          },
          { type: 'paragraph', html: '<strong>Legal basis:</strong>' },
          {
            type: 'list',
            items: [
              'Art. 6 para. 1 lit. b GDPR insofar as processing is necessary for booking inquiries, pre-contractual measures, or the execution of a booking',
              'Art. 6 para. 1 lit. f GDPR insofar as the technical integration and provision of the booking widget is concerned',
            ],
          },
          {
            type: 'paragraph',
            html: 'Further information on data processing by Smoobu can be found in Smoobu’s privacy notice.',
          },
        ],
      },
      {
        heading: '7. Payment processing via Stripe',
        blocks: [
          {
            type: 'paragraph',
            html: 'Payment processing does not take place directly on this website, but externally via <strong>Stripe</strong>. Depending on the contractual setup, the provider is a Stripe company, for Europe regularly:',
          },
          {
            type: 'paragraph',
            html: '<strong>Stripe Payments Europe, Limited</strong><br /><strong>[Anschrift ergänzen, falls gewünscht]</strong>',
          },
          {
            type: 'paragraph',
            html: 'If you make a payment, the data required for payment processing is transmitted to Stripe or processed there. This may include in particular:',
          },
          {
            type: 'list',
            items: ['Name', 'Email address', 'Payment data', 'Billing data', 'Transaction data'],
          },
          {
            type: 'paragraph',
            html: 'In its Privacy Policy, Stripe describes that the company acts as a <strong>controller and/or processor</strong> depending on the processing activity.',
          },
          {
            type: 'paragraph',
            html: '<strong>Legal basis:</strong> Art. 6 para. 1 lit. b GDPR',
          },
          {
            type: 'paragraph',
            html: 'Further information on data processing by Stripe can be found in Stripe’s privacy notice.',
          },
        ],
      },
      {
        heading: '8. Cookies and similar technologies',
        blocks: [
          {
            type: 'paragraph',
            html: 'We only use cookies and similar technologies on our website that are required for the technical operation of the website and the provision of its functions. This may in particular include technically necessary technologies of the integrated <strong>Smoobu</strong> booking tool insofar as these are required for displaying and using the booking widget and for initiating and carrying out bookings.',
          },
          {
            type: 'paragraph',
            html: 'Consent is not required for this pursuant to <strong>Section 25 para. 2 TDDDG</strong> insofar as the use of these technologies is absolutely necessary. To the extent personal data is processed in connection with a booking, processing takes place on the basis of <strong>Art. 6 para. 1 lit. b GDPR</strong> for carrying out pre-contractual measures or contract performance. The classification under the TDDDG is relevant in Germany for cookies and similar technologies.',
          },
        ],
      },
      {
        heading: '9. Recipients of personal data',
        blocks: [
          {
            type: 'paragraph',
            html: 'Personal data is only passed on to third parties to the extent necessary for operating the website and providing the booking and payment functions.',
          },
          {
            type: 'paragraph',
            html: 'Recipients may in particular include:',
          },
          {
            type: 'list',
            items: [
              'GitHub',
              'Host Europe',
              'Smoobu',
              'Stripe',
              'Technical IT and maintenance service providers, where necessary',
            ],
          },
        ],
      },
      {
        heading: '10. Transfers to third countries',
        blocks: [
          {
            type: 'paragraph',
            html: 'In connection with the use of GitHub, a transfer of personal data to the <strong>USA</strong> cannot be ruled out. GitHub states in its Privacy Statement that it is certified under the <strong>EU-U.S. Data Privacy Framework</strong>; this is also shown in the official DPF register. To the extent personal data is transferred to the USA, we therefore base the transfer on the <strong>adequacy decision of the European Commission</strong> for certified companies under the EU-U.S. Data Privacy Framework.',
          },
          {
            type: 'paragraph',
            html: 'If further service providers process data in third countries, this only takes place on the basis of the statutory requirements.',
          },
        ],
      },
      {
        heading: '11. Storage duration',
        blocks: [
          {
            type: 'paragraph',
            html: 'We store personal data only for as long as necessary for the respective purposes or as long as statutory retention obligations exist.',
          },
          {
            type: 'paragraph',
            html: 'Where data is processed in connection with a booking, the storage duration depends in particular on retention obligations under commercial, tax, and civil law.',
          },
        ],
      },
      {
        heading: '12. Your rights',
        blocks: [
          {
            type: 'paragraph',
            html: 'Within the scope of the statutory provisions, you have the following rights:',
          },
          {
            type: 'list',
            items: [
              'Right of access pursuant to Art. 15 GDPR',
              'Right to rectification pursuant to Art. 16 GDPR',
              'Right to erasure pursuant to Art. 17 GDPR',
              'Right to restriction of processing pursuant to Art. 18 GDPR',
              'Right to data portability pursuant to Art. 20 GDPR',
              'Right to object pursuant to Art. 21 GDPR',
              'Right to withdraw consent granted with effect for the future',
            ],
          },
          {
            type: 'paragraph',
            html: 'You also have the right to lodge a complaint with a data protection supervisory authority.',
          },
        ],
      },
      {
        heading: '13. Obligation to provide data',
        blocks: [
          {
            type: 'paragraph',
            html: 'The provision of personal data is generally neither legally nor contractually required. However, without the processing of technically necessary data, this website cannot be provided. Without the information required in the booking or payment process, a booking or payment cannot be carried out.',
          },
        ],
      },
      {
        heading: '14. Version',
        blocks: [{ type: 'paragraph', html: 'Version: April 2026' }],
      },
    ],
  },
} satisfies LegalContent;

export default legal;
