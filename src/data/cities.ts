export interface City { slug:string; name:string; county:string; title:string; description:string; intro:string; angle:string; caution:string; }
export const brand = 'Toledo Metro Fix & Flip Loan';
export const domain = 'toledofixandflip.loansapp.cfd';
export const formName = 'Toledo-Metro-Fix-Flip-Loan-Form';
/** GA4 measurement ID. Leave empty until the property is created, then paste the G-XXXXXXXXXX value here. */
export const ga4Id = '';

type Raw = [slug:string, name:string, county:string, intro:string, angle:string, caution:string];
const raw: Raw[] = [
  ['toledo', 'Toledo', 'Lucas', 'Toledo spans the Old West End, Old South End, Point Place and Hawkins-area neighborhoods near the Maumee River and Lake Erie. Tell us the address and the work you plan. We will connect you with funding sources that review the project on its own terms.', 'Victorians, bungalows and post-war Cape Cods share the city, and the buyer changes by neighborhood. Compare your plan with recent sales on the same street.', 'Basement water, lead paint and aging mechanicals are common. Walk the house with a contractor and tell us what is still unconfirmed.'],
  ['sylvania', 'Sylvania', 'Lucas', 'Sylvania is a northwest suburb with a walkable downtown and a strong school district. Share the property and your plan. We connect investors with funding sources that can review a higher-finish flip.', 'Colonials and ranches draw owner-occupants who expect modern kitchens and finished basements. Use Sylvania sales, not Toledo averages.', 'Older homes can hide wiring and drainage problems. Tell us what the inspection found.'],
  ['maumee', 'Maumee', 'Lucas', 'Maumee sits on the Maumee River with a historic downtown and the Anthony Wayne Trail corridor. Send us the address and the plan. We introduce your project to funding sources and respond promptly.', 'Cape Cods, ranches and older colonials make up the market, and buyers like the walkability and the river. Use recent city sales.', 'Parcels near the river need a flood check. Confirm status for the address.'],
  ['perrysburg', 'Perrysburg', 'Wood', 'Perrysburg is a Wood County city across the river from Maumee, with a historic downtown and Fort Meigs nearby. Tell us what you are buying. We connect you with funding sources and answer questions quickly.', 'Older homes near downtown and newer subdivisions farther out draw buyers who expect quality finishes. Match your scope to recent Perrysburg sales.', 'River flood risk and older basements both need a look. Share what you find.'],
  ['oregon', 'Oregon', 'Lucas', 'Oregon is an east-side Lucas County city on Maumee Bay and Lake Erie. Share the property and your plan. We introduce your project to funding sources that fit it.', 'Ranches and bungalows dominate, and buyers like the lake access and lower prices. Use sales within the city.', 'Lake exposure and low areas need a flood check. Confirm status.'],
  ['northwood', 'Northwood', 'Wood', 'Northwood is a small Wood County city next to Rossford and the Maumee River. Send us the address and the plan. We connect investors with funding sources and keep things clear.', 'Modest ranches and cottages are typical, and buyers want clean, updated houses. Compare with Rossford and Millbury sales.', 'Check drainage and the foundation. Tell us what you find.'],
  ['rossford', 'Rossford', 'Wood', 'Rossford sits on the Maumee River, with a glassmaking history and a compact residential grid. Tell us about the property. We connect you with funding sources and respond quickly.', 'Small frame homes and bungalows are common. A practical renovation matched to nearby sales usually works best.', 'River flooding and older wiring both deserve a look.'],
  ['waterville', 'Waterville', 'Lucas', 'Waterville is a river town on the Maumee, with a historic district and a popular riverfront. Share the property and the plan. We introduce your project to funding sources and keep things moving.', 'Older homes near the river and newer subdivisions farther out both trade. Pick the exit before you set the scope.', 'Floodplain parcels near the river need special attention. Confirm status.'],
  ['holland', 'Holland', 'Lucas', 'Holland is a southwest Toledo-area village along Airport Highway, near the airport and the Anthony Wayne Trail. Send us the address and your plan. We connect you with funding sources and answer questions promptly.', 'Ranches and colonials from the 1970s onward draw commuters. Use Holland and Springfield Township sales.', 'Check roof age and basement dampness first.'],
  ['whitehouse', 'Whitehouse', 'Lucas', 'Whitehouse is a small Lucas County village west of Waterville with a rural feel. Tell us what you plan to buy. We introduce your project to funding sources that fit it.', 'Country lots and newer homes dominate, and buyers want space. Comparable sales can be thin, so gather several.', 'Septic and well questions come up on rural lots. Confirm utilities.'],
  ['swanton', 'Swanton', 'Fulton', 'Swanton is a Fulton County village west of Toledo, close to the Toledo Metcalf airport area. Share the property and your plan. We connect investors with funding sources and respond quickly.', 'Small-town homes trade at moderate prices, so tight scope matters. Use Swanton and Delta sales.', 'Check drainage and the age of mechanicals. Tell us what is verified.'],
  ['bowling-green', 'Bowling Green', 'Wood', 'Bowling Green is the Wood County seat and home to Bowling Green State University. Send us the address and the plan. We introduce your project to funding sources and keep things clear.', 'Rental demand shapes the market near campus, while owner-occupants buy on the other side of town. Decide the exit before you set the scope.', 'Older rentals may need wiring and fire-safety updates. Tell us what you find.'],
  ['walbridge', 'Walbridge', 'Wood', 'Walbridge is a small Wood County village just southeast of Toledo near the Maumee River. Tell us about the property and the plan. We connect you with funding sources and answer questions promptly.', 'Modest ranches and cottages sell at lower prices, so margins depend on tight scope. Use village and Northwood sales.', 'Check the basement and the drainage.'],
  ['ottawa-hills', 'Ottawa Hills', 'Lucas', 'Ottawa Hills is a small high-end village in west Toledo, with large lots and historic homes. Share the property and your finish plan. We introduce your project to funding sources that can review a higher-finish project.', 'Buyers expect quality restoration and strong curb appeal. Match your finish level to recent village sales.', 'Large older homes carry large system and roof costs. Be specific about what is verified.'],
  ['monclova', 'Monclova Township', 'Lucas', 'Monclova Township is a township in southwestern Lucas County, near Maumee and Holland, with growing subdivisions. Send us the address and the plan. We connect investors with funding sources and respond quickly.', 'Subdivision homes from the 1990s onward draw commuters. Use sales in the same subdivision.', 'Check the grading and the foundation.'],
  ['springfield-township', 'Springfield Township', 'Lucas', 'Springfield Township is a Lucas County township on the Maumee River, covering the Holland and Swanton Pike area. Tell us what you are buying. We introduce your project to funding sources that fit it.', 'Mixed ranches and colonials from several decades share the area. Match comparables to the exact neighborhood.', 'Parcels near the river need a flood check. Confirm status.'],
  ['millbury', 'Millbury', 'Wood', 'Millbury is a Wood County village east of Toledo along the Maumee River. Share the property and the plan. We connect you with funding sources and keep things moving.', 'Small homes on regular lots make up the market. A practical renovation matched to nearby sales is easiest to support.', 'River flooding and older basements both deserve a close look.'],
  ['genoa', 'Genoa', 'Ottawa', 'Genoa is an Ottawa County village east of Toledo near the Portage River. Send us the address and your plan. We introduce your project to funding sources and answer questions promptly.', 'Small-town homes trade at modest prices, so tight scope matters. Gather several nearby comparables.', 'Parcels near the river and low areas need a flood check.']
];
export const cities: City[] = raw.map(([slug,name,county,intro,angle,caution])=>({
  slug,name,county,intro,angle,caution,
  title:`Fix and Flip Loans in ${name}, OH | ${brand}`,
  description:`Fix and flip funding connections for ${name}, Ohio investors. Share your purchase and renovation plan and we connect you with funding sources.`
}));

export interface Scenario { title:string; intro:string; items:string[]; outro:string }
export const priorityCities: string[] = ['toledo','sylvania','perrysburg','oregon'];
export const scenarios: Record<string,Scenario> = {
  'toledo':{title:'A Toledo project, step by step',intro:'This is an illustration of how a project package might read for a bungalow in a Toledo neighborhood. It is not a real deal.',items:['The buyer sends the address, the contract and a list of what the house needs: sump pump, wiring, kitchen, bath and floors.','A contractor walks the property and returns a written scope that notes lead-safe practices. The buyer adds three recent sales nearby.','We connect the project with funding sources, and the buyer answers follow-up questions about timeline and exit.'],outro:'Every project is different, and funding sources make their own decisions. Read our <a href="/fix-and-flip-project-checklist/">project checklist</a> to prepare your own package.'},
  'sylvania':{title:'A Sylvania project, step by step',intro:'This is an illustration of a package for a Sylvania colonial. It is not a real deal.',items:['The buyer lists the work: kitchen, three baths, finished basement and flooring.','The package includes a contractor scope and recent sales within the same school zone.','We introduce the project to funding sources that can review a higher-finish flip.'],outro:'Funding sources make their own decisions on each project. Start with the <a href="/fix-and-flip-project-checklist/">project checklist</a>.'},
  'perrysburg':{title:'A Perrysburg project, step by step',intro:'This is an illustration of a package for an older Perrysburg home near downtown. It is not a real deal.',items:['The buyer confirms flood status and records basement condition in the file.','The scope covers the kitchen, bath, roof and refinished floors.','We connect the project with funding sources and respond to questions as they come up.'],outro:'No outcome is guaranteed. The <a href="/fix-and-flip-vs-hard-money/">fix and flip vs hard money</a> guide explains how this kind of funding differs from other options.'},
  'oregon':{title:'An Oregon project, step by step',intro:'This is an illustration of a package for a ranch near Maumee Bay. It is not a real deal.',items:['The buyer records the flood status for the address.','The scope covers the roof, the kitchen, the bath and flooring.','We connect the project with funding sources and keep the buyer informed.'],outro:'Funding sources make their own decisions on each project. Start with the <a href="/fix-and-flip-project-checklist/">project checklist</a>.'}
};
export const nearbyAreas: Record<string,string[]> = {
  'toledo':['sylvania','maumee','oregon'],
  'sylvania':['toledo','maumee','oregon'],
  'maumee':['toledo','sylvania','oregon'],
  'perrysburg':['northwood','rossford','bowling-green'],
  'oregon':['toledo','sylvania','maumee'],
  'northwood':['perrysburg','rossford','bowling-green'],
  'rossford':['perrysburg','northwood','bowling-green'],
  'waterville':['toledo','sylvania','maumee'],
  'holland':['toledo','sylvania','maumee'],
  'whitehouse':['toledo','sylvania','maumee'],
  'swanton':['toledo','sylvania','maumee'],
  'bowling-green':['perrysburg','northwood','rossford'],
  'walbridge':['perrysburg','northwood','rossford'],
  'ottawa-hills':['toledo','sylvania','maumee'],
  'monclova':['toledo','sylvania','maumee'],
  'springfield-township':['toledo','sylvania','maumee'],
  'millbury':['perrysburg','northwood','rossford'],
  'genoa':['toledo','sylvania','maumee']
};
