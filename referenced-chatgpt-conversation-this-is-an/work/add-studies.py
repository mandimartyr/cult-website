import json
from pathlib import Path
D=[]
def pairs(values):return [dict(zip(('name','copy'),x)) for x in values]
def channels(values):return [dict(zip(('name','job'),x)) for x in values]
def search(values):return [dict(zip(('intent','page'),x)) for x in values]
def criteria(values):return [dict(zip(('name','definition'),x)) for x in values]
D.append(dict(
slug='noct',number='002',name='NOCT.',industry='Fragrance / Beauty / Ecommerce',accent='#b78576',
disciplines=['Positioning','Creative direction','Ecommerce','Paid social','Performance creative','Email lifecycle','CRO','Retargeting'],
sentence='Turning an atmosphere into a reason to buy.',campaign='WEAR THE AFTERMATH.',
premise='NOCT is a fictional independent fragrance house producing severe, atmospheric fragrances for people unmoved by conventional luxury perfume branding.',
problem='Beige luxury, heritage clichés and interchangeable bottle photography make a new fragrance difficult to distinguish. An arresting campaign can earn attention, but a shopper still cannot smell a product through a screen.',
position='Fragrance for after dark. Make the character unmistakable, then make discovery easier.',
decision='Build the brand around an after-dark sensibility, but give the product page a practical job: translate mood into notes, intensity, format and a confident first purchase. Creative desire and product clarity should reinforce each other.',
system=pairs([
('A recognizable photographic language','Hard flash, black glass, chrome and skin. A restrained oxblood accent would belong to NOCT; CULT’s magenta stays in the surrounding interface.'),
('A product page that earns the cart','Pair atmospheric campaign images with clear fragrance notes, format choices, delivery details and an optional discovery pathway. Do not invent customer reviews or scarcity.'),
('A lifecycle beyond the launch','Plan an opt-in welcome sequence, product education and relevant replenishment prompts. Separate first-time discovery from returning-customer messages.')]),
campaignIdea='“Wear the aftermath.” gives NOCT an emotional world without borrowing heritage. Macro product frames would establish recognition; skin and flash would create a second creative territory. Short vertical edits would test the opening image, reveal of the bottle and clarity of the product proposition—not pretend that a beautiful film guarantees sales.',
experience=dict(title='Make the unseen product easier to choose.',copy='The product page would join desire to decision: notes and character first, format and delivery next, then a clear cart action. A launch landing page would offer a lower-commitment discovery path. Checkout would surface delivery costs and guest purchase before the final step; no forced account or false urgency.',steps=['Discover the fragrance character','Compare notes and format','Review delivery and returns','Choose the first purchase']),
channels=channels([
('Meta / paid social','Use contrasting product-led and atmosphere-led executions to learn which message attracts qualified new shoppers. Separate creative testing from audience expansion.'),
('TikTok / Reels','A proposed three-shot sequence: flash on skin, chrome reflection, bottle reveal. Keep the fragrance name and discovery action legible in the final frame.'),
('Retargeting','Show product notes or discovery options to consented visitors who engaged but did not purchase. Exclude purchasers and limit frequency.'),
('Email lifecycle','A three-message launch: introduce the house, explain the fragrance, invite discovery. Purchase behavior would determine what follows, rather than a universal discount sequence.')]),
search=search([
('Fragrance character','Build useful pages around scent notes and wearing occasions, with accurate ingredient and product information confirmed before launch.'),
('First purchase uncertainty','Answer format, sampling, delivery and returns questions close to the product decision.'),
('Brand discovery','A clear house story, product naming and structured product information would connect campaign recognition to branded search.')]),
criteria=criteria([
('New-customer CAC','Acquisition cost divided by first-time customers, with returning purchasers excluded.'),
('Product-page conversion','Eligible product-page sessions that lead to an order; segment by source and device.'),
('Email capture','Consented subscribers per eligible visitor, with subscriber quality monitored beyond sign-up.'),
('First-purchase conversion','Discovery visitors who become first-time purchasers within an agreed observation window.'),
('Creative hold rate','Retention through defined points in a video, interpreted alongside qualified traffic and purchase intent.'),
('Repeat purchase','Returning purchase behavior by cohort, evaluated only once the product lifecycle provides enough time.')]),
artAlt='NOCT self-initiated fragrance campaign with black glass, chrome, skin and Wear the aftermath typography.',
experienceHeadline='Fragrance for after dark.',experienceCTA='Discover Aftermath',emailSubject='The night has a signature.',emailBody='Mineral. Smoke. Skin. Meet Aftermath: a fragrance concept built around what stays with you. Explore the notes before choosing your format.',adLine='Some things stay after you leave.',adCTA='Meet the fragrance'))
D.append(dict(
slug='aer',number='003',name='AER.',industry='Regional aviation / Travel',accent='#244d6a',
disciplines=['Launch strategy','Campaign','Paid media','Programmatic','Search','Landing pages','Route promotion','Email'],
sentence='Making the overlooked connection the reason to choose.',campaign='CLOSER TO WHAT MATTERS.',
premise='AER is a fictional challenger regional airline connecting underserved Canadian and northern-market routes.',
problem='An unfamiliar route is not automatically a desirable one. A new airline would need to explain why its connections matter for work, family and access while giving travellers the clarity they expect from larger carriers.',
position='Not more destinations. Better connections to the places people actually need to go.',
decision='Build preference one journey at a time. Lead with the practical value of a connection, then make route availability, travel conditions and booking steps easy to understand. Do not claim a route network or schedule that does not exist.',
system=pairs([
('A route-first launch','An editorial launch page would establish the proposition, with dedicated route pages ready for a validated fictional network rather than an invented map of active services.'),
('Campaigns with local relevance','A repeatable image system would pair severe aircraft crops with the reason to make a journey. Each route campaign would have its own destination story and landing experience.'),
('One path into booking','Join fare search, route information and email alerts. Keep return dates, fare inclusions and traveller requirements visible before asking for payment details.')]),
campaignIdea='“Closer to what matters.” would make the value of a regional connection emotional and practical. Enormous skies and tightly cropped aircraft create distance; concise route messaging would resolve it. Airport OOH establishes recognition while display and social would connect that recognition to a specific route page.',
experience=dict(title='From unfamiliar route to useful journey.',copy='A route page would explain who a connection serves, where it goes and what the fare includes. A persistent but compact search module would carry origin, destination and travel dates into the booking path. Fare alerts would capture consent when a traveller is interested but not ready. No live destinations, availability or fares are represented in this prototype.',steps=['Choose origin and destination','Review route and travel details','Start a fare search','Review the complete booking']),
channels=channels([
('Google Search','Capture destination-pair and regional-travel intent only for routes that would actually be offered. Separate brand, route and informational demand.'),
('Programmatic / contextual','Build familiarity in relevant departure and destination markets through travel, business and local coverage. Geography should follow route opportunity, not national reach for its own sake.'),
('Paid social / route promotion','Explain the value of a connection through a specific reason to travel. Each creative would link to the corresponding route experience.'),
('Airport OOH','A large-format recognition layer in relevant travel environments, shown here as a visualization only.'),
('Fare-alert email','Send route-specific updates to people who opted in. Preserve their selected route and travel interest rather than sending a generic destination newsletter.')]),
search=search([
('Origin → destination','Dedicated route pages with validated schedules, airport information and fare conditions when a network is defined.'),
('Journey planning','Useful content about regional access, airport transfers and travel preparation, reviewed for operational accuracy.'),
('Destination intent','Local destination pages tied to genuine route usefulness, without mass-producing thin location content.')]),
criteria=criteria([
('Route searches','Valid origin/destination searches, segmented by market and travel window.'),
('Booking starts','Sessions that move from route consideration into a fare-selection flow.'),
('Completed bookings','Confirmed transactions reconciled to the booking system, excluding cancellations where appropriate.'),
('CAC','Acquisition cost per new booking customer under an agreed customer definition.'),
('Branded-search growth','Change in relevant brand query demand relative to a documented pre-launch baseline.'),
('Email subscriptions','Consented fare-alert registrations with a useful route preference.'),
('Route-level demand','Searches and bookings evaluated at route level against the available service context.')]),
artAlt='AER self-initiated aviation campaign with a severely cropped aircraft against a cold northern sky.',
experienceHeadline='Better connections. Real reasons to go.',experienceCTA='Explore a connection',emailSubject='Your next connection starts here.',emailBody='Choose the places you need to reach. We would send route-specific updates when there is something useful to know—not another generic travel offer.',adLine='Some places should feel closer.',adCTA='Find your connection'))
D.append(dict(
slug='field',number='004',name='FIELD.',industry='Hospitality / Wilderness stay',accent='#41503d',
disciplines=['Brand strategy','Website','Organic search','Paid search','Paid social','Retargeting','Email','Booking CRO'],
sentence='Giving distance a purpose—and direct booking a reason.',campaign='LEAVE THE SIGNAL.',
premise='FIELD is a fictional contemporary wilderness accommodation concept outside major urban centres: dark timber, demanding landscapes and a deliberate change of pace.',
problem='Attractive photography can create desire without answering the questions that determine a booking. If location, access, seasonality and stay details remain vague, visitors return to listing platforms to make the decision.',
position='Leave the signal. Make intentional distance the attraction, and practical clarity the reason to book directly.',
decision='Show the physical place without lifestyle theatre. Pair architecture and weather with honest information about access, facilities and what a stay requires. A direct booking should feel clearer, not merely cheaper.',
system=pairs([
('A place with a point of view','Dark timber, fire, fog and exposed landscape would create a recognizable environment. No beige luxury shorthand or staged lifestyle scenes.'),
('A website that answers the stay','A homepage would sell the idea of distance; individual stay pages would clarify arrival, facilities, seasonal conditions and booking terms.'),
('A demand calendar tied to the place','Seasonal pages, search content and creative would follow the real conditions of the destination. Direct-booking messages would emphasize clarity and relevant stay information.')]),
campaignIdea='“Leave the signal.” creates a reason to travel beyond a beautiful room. Exterior photography would establish the landscape; the interior fire-and-window study would make the stay tangible. Seasonal executions would change light, weather and practical information while keeping the same architectural point of view.',
experience=dict(title='Make the stay imaginable. Make booking clear.',copy='The stay page would join location, access, accommodation details and cancellation terms to one direct booking path. Seasonal landing pages would answer the conditions that change a trip. A saved or abandoned booking email would preserve dates only with appropriate consent and explain the next step without manufacturing scarcity.',steps=['Explore the place and season','Review access and stay details','Choose dates and guests','Confirm terms and book directly']),
channels=channels([
('Organic search','Earn discovery through useful destination, access and seasonal planning content. Clarify the property’s actual location once a location is defined.'),
('Google Search','Capture stay and destination intent with seasonal landing pages, excluding irrelevant locations and incompatible accommodation needs.'),
('Paid social','Use architecture and environmental contrast to create desire in plausible travel-origin markets. Let stay-detail engagement inform creative choices.'),
('Retargeting','Answer the unresolved booking question: access, the room or the season. Exclude completed bookings and avoid invented availability claims.'),
('Email','Support opted-in planning and unfinished booking journeys. Seasonal notes should contain useful reasons to return, not perpetual discounts.')]),
search=search([
('Where could we go?','Destination and stay-type pages that explain the actual place, travel effort and environment.'),
('What is it like in this season?','Seasonal pages for weather, access, what to pack and what changes in the experience.'),
('Can this stay work for us?','Clear accommodation, facilities, accessibility and arrival information; verify every operational claim before launch.')]),
criteria=criteria([
('Direct-booking share','Direct confirmed reservations as a share of total reservations across channels.'),
('Booking conversion','Confirmed bookings divided by eligible booking-flow sessions.'),
('Cost per booking','Attributable acquisition cost per confirmed reservation, interpreted with cancellation behavior.'),
('Email capture','Consented planning-interest registrations rather than unqualified giveaway entries.'),
('Occupancy contribution','Booked room nights associated with marketing activity, interpreted against inventory and seasonality.'),
('Branded search','Relevant brand search demand tracked against a recorded starting point.')]),
artAlt='FIELD self-initiated hospitality campaign: black timber architecture, a harsh foggy landscape and Leave the signal.',
experienceHeadline='A little further from everything.',experienceCTA='Plan your stay',emailSubject='The distance is still there.',emailBody='Return to the stay you were considering. Revisit the place, the season and the details before you decide when to go.',adLine='Less signal. More sense of place.',adCTA='Explore the stay'))
D.append(dict(
slug='signal',number='005',name='SIGNAL.',industry='B2B intelligence / Analytics software',accent='#683c20',
disciplines=['Positioning','Website','SEO','Content','Paid search','LinkedIn','Programmatic','Conversion','Lead nurture'],
sentence='Turning more information into a clearer next decision.',campaign='KNOW WHAT MATTERS NEXT.',
premise='SIGNAL is a fictional B2B intelligence product that turns fragmented operational or market data into prioritized intelligence for commercial teams.',
problem='The analytics category promises more dashboards and “AI-powered insights” without explaining how a team would make a better decision. Buyers need to understand the action the product supports, not another abstract capability list.',
position='The value is not more data. It is knowing what deserves action.',
decision='Organize the product story around a decision: what changed, why it matters and what to review next. Make the evidence and limitations visible. Sell a useful operating habit rather than an unspecified intelligence engine.',
system=pairs([
('A decision-first website','The homepage would establish the difference between data collection and prioritization. Product pages would show the evidence behind a recommendation, with example content clearly identified.'),
('A useful content engine','Build a practical Priority Brief, comparison pages and decision-oriented search content. Address the work a buyer is trying to improve instead of repeating category buzzwords.'),
('A qualified demo pathway','Ask about the team’s decision problem and operating context. A short nurture sequence would connect that problem to an appropriate product demonstration.')]),
campaignIdea='“Know what matters next.” gives the product a clear job. Thermal print, annotated paper and physical instruments make fragmented information tangible. The Priority Brief would carry the same identity into a useful lead magnet; LinkedIn and contextual display would frame a business question rather than show decorative dashboards.',
experience=dict(title='Show the decision before asking for the demo.',copy='A product experience would explain an example signal, its source and the decision it could inform. The demo path would ask for work context before scheduling. A comparison/search page would help a buyer distinguish dashboards from prioritized intelligence without inventing competitor limitations or product integrations.',steps=['Name the decision problem','Inspect an example signal','Share team and operating context','Request a relevant demonstration']),
channels=channels([
('Google Search','Target problem-aware and category-aware intent with distinct pages. Exclude training, job and generic data-definition queries where they do not signal a buying need.'),
('LinkedIn','Reach commercial and operational leaders with specific decision-friction scenarios. Move interested readers to a relevant product explanation or the Priority Brief.'),
('Programmatic / contextual','Use business and industry context to introduce the problem. Apply frequency controls and measure qualified engagement, not just cheap impressions.'),
('Lead nurture','A proposed sequence would deliver the brief, unpack one decision pattern and invite a problem-specific demo. Consent and sales-stage feedback would control subsequent contact.')]),
search=search([
('Data without a decision','Problem pages about fragmented commercial information and prioritization workflows, with useful examples.'),
('Dashboard vs intelligence','A comparison page that explains categories and tradeoffs; no unverified claims about named competitors.'),
('How should teams prioritize?','A content cluster on evidence, review cadence and action ownership, with concise expert-reviewed answers suitable for search and AEO.')]),
criteria=criteria([
('Qualified demos','Requests from relevant teams with an identifiable decision problem and plausible product fit.'),
('Cost per qualified demo','Acquisition cost divided by sales-accepted demo requests.'),
('Search visibility','Relevant non-branded impressions and qualified organic visits to problem/product pages.'),
('Content-assisted conversions','Qualified enquiries with observed content engagement, with attribution scope made explicit.'),
('Pipeline','Sales opportunity creation associated with qualified enquiries; reconcile marketing events to CRM stages.'),
('Sales-cycle influence','Observed content and campaign engagement across sales stages, without assuming that correlation proves causation.')]),
artAlt='SIGNAL self-initiated intelligence campaign using a physical printer, a priority slip and Know what matters next.',
experienceHeadline='A signal. A reason. A next step.',experienceCTA='Discuss your decision',emailSubject='More information is not the next step.',emailBody='The Priority Brief starts with a simpler question: what changed enough to deserve action? Explore a practical framework for separating evidence from noise.',adLine='The report is not the decision.',adCTA='Read the Priority Brief'))
p=Path('/Users/mandijordan/Documents/Codex/2026-09-06/referenced-chatgpt-conversation-this-is-an/outputs/cult/lib/studies.ts');s=p.read_text();pos=s.index('\n];\nexport function getStudy');s=s[:pos]+',\n'.join(json.dumps(d,ensure_ascii=False,indent=2) for d in D)+',\n'+s[pos:];p.write_text(s)
