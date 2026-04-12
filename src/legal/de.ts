import type { LegalContent } from '../i18n/types';

const legal = {
  imprint: {
    metaTitle: 'Impressum | Hoesch@Home',
    metaDescription: 'Impressum von Hoesch@Home.',
    eyebrow: 'Rechtliches',
    heading: 'Impressum',
    sections: [
      {
        heading: 'Angaben gemäß § 5 DDG',
        blocks: [
          {
            type: 'paragraph',
            html: 'Hoesch Beteiligungsverwaltung GmbH<br />Zellerstrasse 29<br />82067 Ebenhausen<br />Deutschland',
          },
        ],
      },
      {
        heading: 'Vertreten durch',
        blocks: [{ type: 'paragraph', html: 'Geschäftsführer: Michael Hoesch' }],
      },
      {
        heading: 'Kontakt',
        blocks: [
          {
            type: 'paragraph',
            html: '+49 172 8370525<br />E-Mail: <a class="underline decoration-current underline-offset-2" href="mailto:michael.hoesch@lifebond.de">michael.hoesch@lifebond.de</a>',
          },
        ],
      },
      {
        heading: 'Handelsregister',
        blocks: [
          {
            type: 'paragraph',
            html: 'Registergericht: Amtsgericht München<br />Registernummer: HRB 139800',
          },
        ],
      },
      {
        heading: 'Umsatzsteuer-ID',
        blocks: [
          {
            type: 'paragraph',
            html: 'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE259911362',
          },
        ],
      },
      {
        heading: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
        blocks: [
          {
            type: 'paragraph',
            html: 'Michael Hoesch<br />Zellerstrasse 29<br />82067 Ebenhausen<br />Deutschland',
          },
        ],
      },
    ],
  },
  privacy: {
    metaTitle: 'Datenschutzerklärung | Hoesch@Home',
    metaDescription: 'Datenschutzerklärung von Hoesch@Home.',
    eyebrow: 'Rechtliches',
    heading: 'Datenschutzerklärung',
    sections: [
      {
        heading: '1. Verantwortliche Stelle',
        blocks: [
          {
            type: 'paragraph',
            html: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
          },
          {
            type: 'paragraph',
            html: 'Hoesch Beteiligungsverwaltung GmbH<br />Zellerstrasse 29<br />82067 Ebenhausen<br />Deutschland<br />Telefon: +49 172 8370525<br />E-Mail: <a class="underline decoration-current underline-offset-2" href="mailto:michael.hoesch@lifebond.de">michael.hoesch@lifebond.de</a>',
          },
        ],
      },
      {
        heading: '2. Allgemeine Hinweise zur Datenverarbeitung',
        blocks: [
          {
            type: 'paragraph',
            html: 'Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der geltenden datenschutzrechtlichen Vorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO).',
          },
          {
            type: 'paragraph',
            html: 'Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.',
          },
        ],
      },
      {
        heading: '3. Aufruf der Website',
        blocks: [
          {
            type: 'paragraph',
            html: 'Beim Aufruf dieser Website werden technisch erforderliche Daten verarbeitet, um die Website bereitzustellen sowie ihre Stabilität und Sicherheit zu gewährleisten.',
          },
          {
            type: 'paragraph',
            html: 'Dabei können insbesondere folgende Daten verarbeitet werden:',
          },
          {
            type: 'list',
            items: [
              'IP-Adresse',
              'Datum und Uhrzeit des Zugriffs',
              'aufgerufene Inhalte',
              'Browsertyp und Browserversion',
              'verwendetes Betriebssystem',
              'Referrer-URL',
              'Geräte-, Sitzungs- und Verbindungsinformationen',
            ],
          },
          {
            type: 'paragraph',
            html: '<strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO<br /><strong>Berechtigtes Interesse:</strong> sichere, stabile und technisch fehlerfreie Bereitstellung der Website. GitHub nennt in seiner Privacy Statement insbesondere IP-, Geräte-, Sitzungs- und Request-Daten als verarbeitete Kategorien.',
          },
        ],
      },
      {
        heading: '4. Hosting über GitHub Pages',
        blocks: [
          {
            type: 'paragraph',
            html: 'Diese Website wird über <strong>GitHub Pages</strong> bereitgestellt. Anbieter ist:',
          },
          {
            type: 'paragraph',
            html: '<strong>GitHub, Inc.</strong><br />88 Colin P. Kelly Jr. Street<br />San Francisco, CA 94107<br />USA',
          },
          {
            type: 'paragraph',
            html: 'Beim Besuch dieser Website können durch GitHub technisch erforderliche personenbezogene Daten verarbeitet werden, insbesondere zum Ausliefern der Website sowie zur Gewährleistung von Sicherheit und Integrität der Dienste. GitHub beschreibt dies in seiner Datenschutzerklärung.',
          },
          {
            type: 'paragraph',
            html: 'Weitere Informationen zur Datenverarbeitung durch GitHub finden Sie in den Datenschutzhinweisen von GitHub.',
          },
        ],
      },
      {
        heading: '5. Domain- und DNS-Dienstleistungen durch Host Europe',
        blocks: [
          {
            type: 'paragraph',
            html: 'Die Domain dieser Website wird über <strong>Host Europe</strong> bereitgestellt. Im Zusammenhang mit der Bereitstellung der Domain und der DNS-Auflösung können technisch erforderliche Daten verarbeitet werden, soweit dies zur Erreichbarkeit und sicheren Bereitstellung der Website notwendig ist.',
          },
          { type: 'paragraph', html: 'Anbieter ist:' },
          {
            type: 'paragraph',
            html: '<strong>Host Europe GmbH</strong><br /><strong>[Anschrift optional ergänzen]</strong>',
          },
          {
            type: 'paragraph',
            html: '<strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO<br /><strong>Berechtigtes Interesse:</strong> technische Bereitstellung, Erreichbarkeit und Systemsicherheit der Website.',
          },
        ],
      },
      {
        heading: '6. Einbindung des Buchungstools Smoobu',
        blocks: [
          {
            type: 'paragraph',
            html: 'Auf dieser Website ist ein Buchungswidget von <strong>Smoobu</strong> eingebunden. Anbieter ist:',
          },
          {
            type: 'paragraph',
            html: '<strong>Smoobu GmbH</strong><br />Pappelallee 78/79<br />10437 Berlin<br />Deutschland',
          },
          {
            type: 'paragraph',
            html: 'Wenn Sie das Buchungswidget nutzen, können personenbezogene Daten verarbeitet werden, insbesondere:',
          },
          {
            type: 'list',
            items: [
              'Name',
              'Kontaktdaten',
              'Buchungs- und Aufenthaltsdaten',
              'Angaben zur Unterkunftsbuchung',
              'technische Nutzungsdaten',
            ],
          },
          {
            type: 'paragraph',
            html: 'Die Verarbeitung erfolgt zur Bereitstellung der Buchungsfunktion, zur Bearbeitung von Buchungsanfragen sowie zur Anbahnung und Durchführung von Beherbergungsverträgen.',
          },
          {
            type: 'paragraph',
            html: 'Mit Smoobu besteht eine <strong>Vereinbarung zur Auftragsverarbeitung gemäß Art. 28 DSGVO</strong>. Smoobu stellt eine entsprechende AVV bereit und weist darauf hin, dass der Websitebetreiber die betroffenen Personen transparent über die Verarbeitung zu informieren hat.',
          },
          { type: 'paragraph', html: '<strong>Rechtsgrundlage:</strong>' },
          {
            type: 'list',
            items: [
              'Art. 6 Abs. 1 lit. b DSGVO, soweit die Verarbeitung für Buchungsanfragen, vorvertragliche Maßnahmen oder die Durchführung einer Buchung erforderlich ist',
              'Art. 6 Abs. 1 lit. f DSGVO, soweit die technische Einbindung und Bereitstellung des Buchungswidgets betroffen ist',
            ],
          },
          {
            type: 'paragraph',
            html: 'Weitere Informationen zur Datenverarbeitung durch Smoobu finden Sie in den Datenschutzhinweisen von Smoobu.',
          },
        ],
      },
      {
        heading: '7. Zahlungsabwicklung über Stripe',
        blocks: [
          {
            type: 'paragraph',
            html: 'Die Zahlungsabwicklung erfolgt nicht direkt auf dieser Website, sondern extern über <strong>Stripe</strong>. Anbieter ist je nach Vertragskonstellation eine Stripe-Gesellschaft, für Europa regelmäßig:',
          },
          {
            type: 'paragraph',
            html: '<strong>Stripe Payments Europe, Limited</strong><br /><strong>[Anschrift ergänzen, falls gewünscht]</strong>',
          },
          {
            type: 'paragraph',
            html: 'Wenn Sie eine Zahlung vornehmen, werden die für die Zahlungsabwicklung erforderlichen Daten an Stripe übermittelt bzw. dort verarbeitet. Hierzu können insbesondere gehören:',
          },
          {
            type: 'list',
            items: [
              'Name',
              'E-Mail-Adresse',
              'Zahlungsdaten',
              'Rechnungsdaten',
              'Transaktionsdaten',
            ],
          },
          {
            type: 'paragraph',
            html: 'Stripe beschreibt in seiner Privacy Policy, dass das Unternehmen je nach Verarbeitungstätigkeit als <strong>Verantwortlicher und/oder Auftragsverarbeiter</strong> tätig wird.',
          },
          {
            type: 'paragraph',
            html: '<strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO',
          },
          {
            type: 'paragraph',
            html: 'Weitere Informationen zur Datenverarbeitung durch Stripe finden Sie in den Datenschutzhinweisen von Stripe.',
          },
        ],
      },
      {
        heading: '8. Cookies und ähnliche Technologien',
        blocks: [
          {
            type: 'paragraph',
            html: 'Wir verwenden auf unserer Website ausschließlich solche Cookies und ähnlichen Technologien, die für den technischen Betrieb der Website sowie für die Bereitstellung ihrer Funktionen erforderlich sind. Hierzu können insbesondere technisch notwendige Technologien des eingebundenen Buchungstools <strong>Smoobu</strong> gehören, soweit diese für die Anzeige und Nutzung des Buchungswidgets sowie für die Anbahnung und Durchführung von Buchungen erforderlich sind.',
          },
          {
            type: 'paragraph',
            html: 'Eine Einwilligung ist hierfür gemäß <strong>§ 25 Abs. 2 TDDDG</strong> nicht erforderlich, soweit der Einsatz dieser Technologien unbedingt erforderlich ist. Soweit im Zusammenhang mit einer Buchung personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> zur Durchführung vorvertraglicher Maßnahmen bzw. zur Vertragserfüllung. Die Einordnung nach dem TDDDG ist in Deutschland für Cookies und ähnliche Technologien maßgeblich.',
          },
        ],
      },
      {
        heading: '9. Empfänger personenbezogener Daten',
        blocks: [
          {
            type: 'paragraph',
            html: 'Personenbezogene Daten werden nur insoweit an Dritte weitergegeben, wie dies für den Betrieb der Website und die Bereitstellung der Buchungs- und Zahlungsfunktionen erforderlich ist.',
          },
          {
            type: 'paragraph',
            html: 'Empfänger können insbesondere sein:',
          },
          {
            type: 'list',
            items: [
              'GitHub',
              'Host Europe',
              'Smoobu',
              'Stripe',
              'technische IT- und Wartungsdienstleister, soweit erforderlich',
            ],
          },
        ],
      },
      {
        heading: '10. Drittlandübermittlungen',
        blocks: [
          {
            type: 'paragraph',
            html: 'Im Rahmen der Nutzung von GitHub kann eine Übermittlung personenbezogener Daten in die <strong>USA</strong> nicht ausgeschlossen werden. GitHub erklärt in seiner Privacy Statement, nach dem <strong>EU-U.S. Data Privacy Framework</strong> zertifiziert zu sein; dies wird auch im offiziellen DPF-Register ausgewiesen. Soweit personenbezogene Daten in die USA übermittelt werden, stützen wir die Übermittlung daher auf den <strong>Angemessenheitsbeschluss der Europäischen Kommission</strong> für zertifizierte Unternehmen im Rahmen des EU-U.S. Data Privacy Framework.',
          },
          {
            type: 'paragraph',
            html: 'Soweit weitere Dienstleister Daten in Drittländern verarbeiten, erfolgt dies nur auf Grundlage der gesetzlichen Voraussetzungen.',
          },
        ],
      },
      {
        heading: '11. Speicherdauer',
        blocks: [
          {
            type: 'paragraph',
            html: 'Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.',
          },
          {
            type: 'paragraph',
            html: 'Soweit Daten im Rahmen einer Buchung verarbeitet werden, richtet sich die Speicherdauer insbesondere nach handels-, steuer- und zivilrechtlichen Aufbewahrungspflichten.',
          },
        ],
      },
      {
        heading: '12. Ihre Rechte',
        blocks: [
          {
            type: 'paragraph',
            html: 'Sie haben im Rahmen der gesetzlichen Vorgaben folgende Rechte:',
          },
          {
            type: 'list',
            items: [
              'Recht auf Auskunft gemäß Art. 15 DSGVO',
              'Recht auf Berichtigung gemäß Art. 16 DSGVO',
              'Recht auf Löschung gemäß Art. 17 DSGVO',
              'Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO',
              'Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO',
              'Recht auf Widerspruch gemäß Art. 21 DSGVO',
              'Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft',
            ],
          },
          {
            type: 'paragraph',
            html: 'Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.',
          },
        ],
      },
      {
        heading: '13. Pflicht zur Bereitstellung von Daten',
        blocks: [
          {
            type: 'paragraph',
            html: 'Die Bereitstellung personenbezogener Daten ist grundsätzlich weder gesetzlich noch vertraglich vorgeschrieben. Ohne die Verarbeitung technisch erforderlicher Daten kann diese Website jedoch nicht bereitgestellt werden. Ohne die im Buchungs- oder Zahlungsvorgang erforderlichen Angaben kann eine Buchung oder Zahlung nicht durchgeführt werden.',
          },
        ],
      },
      {
        heading: '14. Stand',
        blocks: [{ type: 'paragraph', html: 'Stand: April 2026' }],
      },
    ],
  },
} satisfies LegalContent;

export default legal;
