export const articles = [
  {
    slug: 'example-story',
    source: '/IMG_1636.jpg',
    title: `LAHORE: ADMINISTRATIVE COLLAPSE CALLS FOR LORD MOUNTBATTEN TO OVERSEE SOLUTIONS.`,
    excerpt: 'A beat article covering the discussions on the unrest in Lahore - 6th June 1947',
    content: `Communal violence in Lahore led to a complete administrative collapse on 5 June 1947, requiring Lord Mountbatten to step in and assist Sir Evan Jenkins in governing Punjab. Using his emergency powers, he deployed troops and supervised de-escalation efforts.

As of 6 June, Sir Evan Jenkins had lost control over large parts of Lahore, requiring external aid from Lord Mountbatten and regional leaders to quash the violence. Mountbatten called for the Punjab Partition Committee to convene to discuss future actions.

Before a final consensus was reached, the Punjab Boundary Force (PBF) was deployed to counter large-scale communal violence. Under Mountbatten’s supervision, an emergency force was formed, comprising the 4th Gurkha Regiment, the Governor-General’s special forces, and forces from princely states.

To ensure effective coordination, Mountbatten worked with Mohammad Ali Jinnah and Sir Evan Jenkins to divide Lahore into red and yellow zones. Red zones were placed under a 72-hour curfew, while yellow zones were designated as high-risk areas.

These decisions were made under Mountbatten’s authority with Jinnah’s consultation, resulting in a joint directive passed by the Punjab Partition Committee under the Viceroy’s powers, helping stabilise the situation.`
  },

  {
    slug: 'mus',
    source: '/IMG_1615.jpg',
    title: 'REAL PEOPLE OR RESOURCES: THE PARTITION OF FEROZEPUR AND GURDASPUR DISTRICTS.',
    excerpt: 'A beat article covering the debate on the division of Ferozepur and Gurdaspur between India and Pakistan - 12th June 1947',
    content: `As the Punjab Partition Committee began deciding the Indo-Pakistani border through Punjab, Ferozepur and Gurdaspur emerged as the primary districts of contention due to their mixed populations.

To facilitate this division, Lord Mountbatten created a Border Council comprising the INC, the Akali Dal, and the Muslim League, chaired by non-voting British members. The Indian side argued that although Gurdaspur had a Muslim majority, it was a vital route to Jammu and Kashmir, a princely state that could potentially accede to India.

Ferozepur, on the other hand, was not majority Muslim, and the INC argued it was crucial for controlling irrigation on India’s side of the border.

The Muslim League insisted that both districts should be awarded to Pakistan due to their significant Muslim populations, with Ferozepur having nearly 40% Muslims. They argued that since Kashmir was an independent princely state, India did not require access to it.

With both sides presenting strong arguments, Mountbatten continued working with the council to finalise the allocation of each district.`
  },

  {
    slug: 'breaking-news',
    source: '/FINAL_4.jpg',
    title: 'THE EVIDENCE OF VIOLENCE VERSUS ITS PSYCHOLOGY: A REPORT ON THE DELIBERATION OF THE USA-MEXICO ARMS CONFLICT.',
    excerpt: 'A Detailed Report of Todays Interesting Committee Proceedings - 17th April 2026',
    content: `The BBC reports on the first committee session at the International Court of Justice. The issue centres on Mexican cartel violence and the alleged negligence of the United States in overseeing the cross-border flow of arms.

Mexican officials presented statistical evidence. Foreign Affairs Secretary Juan De La Fuente cited 240,000 deaths, while Economy Secretary Marco Ebrard reported that over 500,000 firearms had been trafficked across the border.

The United States responded with a defensive stance. Kristi Noem questioned why the US should be blamed for arms entering Mexico, pointing to Mexico’s inability to control its cartels. Secretary of Citizen Protection Omar Harfuch partially rebutted this by referencing his own assassination attempt by the CJNG cartel.

US leadership followed with a unified position. President Donald Trump stated that the US would not compromise citizens’ rights to address another nation’s problems, though he acknowledged organised crime in Mexico. Secretary of State Marco Rubio reinforced this, accusing Mexico of externalising an internal issue.

With no agreement in sight and both sides deflecting responsibility, the conflict appears set to continue.`
  },

  {
    slug: 'what',
    source: '/MARCELO.jpg',
    title: 'WHAT IS A LAW?',
    excerpt: 'An Opinionated Editorial criticising the Ministers of Mexican Parliament on their ignorance towards Judicial Citations - 17th April 2026',
    content: `Upon entering the International Court of Justice (ICJ), one might expect precise legal debate. Instead, much of the session focused on a simple question: “Which law does this violate?”

The issue began when Foreign Affairs Secretary Juan De La Fuente accused the United States of violating “Article 16 of International Law,” without specifying a source. When pressed, he failed to clarify.

A similar incident followed when Economy Secretary Marcelo Ebrard cited “Article 42 of the Second Amendment,” without explanation, later deferring his response.

While mildly humorous, these incidents expose a deeper issue. The inability to properly cite legal frameworks undermines credibility in a judicial setting. Although Mexico’s concerns are valid, poor presentation weakens their case.

Such lapses risk reinforcing negative perceptions of smaller nations in international forums, potentially affecting how seriously similar concerns from countries like Nicaragua or Guatemala are treated.

Ultimately, these proceedings highlight internal inefficiencies that may hinder progress. Future ICJ sessions will determine whether Mexico can present its case with the rigour it requires.`
  }
];

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) || null;
}