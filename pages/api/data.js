// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    sender: 'test_frontend',
    query: "what's the name of the case",
    predictions: [
      [
        {
          block_name: 'Case name',
          short_description: 'The case name is The People vs Hall',
          long_description:
            'The case name is The People vs Hall. The case also might be referred to as the The People of the State of Colorado vs Nathan Hall',
          color_comment: 'Color comment for block 97',
          rank: 1,
        },
      ],
      [
        {
          block_name: 'dismissed case',
          short_description: 'The trial court dismissed the case',
          long_description:
            'At a preliminary hearing, the trial court dismissed case for\nlack of probable cause. Defendant won.',
          color_comment: 'Color comment for block 71',
          rank: 2,
          predictions: [
            [
              {
                block_name: 'predictions1',
                short_description: 'The case name is The People vs Hall',
                long_description:
                    'The case name is The People vs Hall. The case also might be referred to as the The People of the State of Colorado vs Nathan Hall',
                color_comment: 'Color comment for block 97',
                rank: 1,
              },
            ],
            [
              {
                block_name: 'predictions2',
                short_description:
                    'its what the trial court and district court thought about the Peoples case. the Appellate and Supreme court disagreed',
                long_description:
                    'The trial court and district court held that the Peoples case or prosecution had a lack of probable cause to proceed against the Defendant. The Appellate disagreed and the Supreme Court applied its definition of reckless manslaughter to the case facts and found that probable cause exists.',
                color_comment: 'Color comment for block 54',
                rank: 3,
              },
            ],
            [
              {
                block_name: 'predictions3',
                short_description:
                    'its what the trial court and district court thought about the Peoples case. the Appellate and Supreme court disagreed',
                long_description:
                    'The trial court and district court held that the Peoples case or prosecution had a lack of probable cause to proceed against the Defendant. The Appellate disagreed and the Supreme Court applied its definition of reckless manslaughter to the case facts and found that probable cause exists.',
                color_comment: 'Color comment for block 54',
                rank: 5,
              },
            ],
          ]
        },
      ],
      [
        {
          block_name: 'lack of probable cause',
          short_description:
            'its what the trial court and district court thought about the Peoples case. the Appellate and Supreme court disagreed',
          long_description:
            'The trial court and district court held that the Peoples case or prosecution had a lack of probable cause to proceed against the Defendant. The Appellate disagreed and the Supreme Court applied its definition of reckless manslaughter to the case facts and found that probable cause exists.',
          color_comment: 'Color comment for block 54',
          rank: 3,
        },
      ],
      [
        {
          block_name: '2000',
          short_description: '2000 is the year this case was heard',
          long_description: 'The year 2000 is the year this case was heard',
          color_comment: 'Color comment for block 104',
          rank: 4,
        },
      ],
      [
        {
          block_name: 'Colorado law',
          short_description: 'Colorado law is the law which is applied to this case',
          long_description: 'Colorado law is the law which is applied to the facts of this case',
          color_comment: 'Color comment for block 92',
          rank: 5,
        },
      ],
      [
        {
          block_name: 'Case Page',
          short_description: 'This case is on page 256',
          long_description: 'This case is between page 256 to 259 of your Crim Law 101 book',
          color_comment: 'Color comment for block 105',
          rank: 6,
        },
      ],
      [
        {
          block_name: 'Criminal Case',
          short_description:
            'This is a criminal case. Defendant was charged with felony reckless manslaughter',
          long_description:
            'The People vs Hall is a criminal case. The prosecution brought charges against defendant and charged him with felony reckless manslaughter',
          color_comment: 'Color comment for block 108',
          rank: 7,
        },
      ],
      [
        {
          block_name: 'No prior decisions cited',
          short_description: 'court didnt rely on other cases',
          long_description:
            'No prior decisions cited by the Court in providing its reasoning in determining recklessness. This was a red flag for me.',
          color_comment: 'Color comment for block 43',
          rank: 8,
        },
      ],
      [
        {
          block_name: 'substantial and unjustifiable risk of death',
          short_description:
            'The Court held Defendants actions posed a\nsubstantial and unjustifiable risk of death',
          long_description:
            'Court held Defendants conduct reveals sufficient probable cause of reckless manslaughter because the defendant acted "despite his subjective awareness of a substantial and unjustifiable risk of death from his conduct."',
          color_comment: 'Color comment for block 13',
          rank: 9,
        },
      ],
      [
        {
          block_name: 'defendant won',
          short_description: 'The Defendant won at the trial court and district court level',
          long_description:
            'At a preliminary hearing, the trial court dismissed case for lack of probable cause thus Defendant won. District court affirmed lack of probable cause. Defendant won again.',
          color_comment: 'Color comment for block 75',
          rank: 10,
        },
      ],
    ],
  })
}
