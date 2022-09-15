// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
      {
        "sender": "test_client",
        "query": "What qualifies as a mental state of recklessness",
        "predictions": [
            {
              "block_name": "Mental state of recklessness",
              "score": 0.944879412651062,
              "short_description": "Mental state of recklessness is a legal definition that forms the rule for this issue",
              "long_description": "Mental state of recklessness, or as I like to call it my 20s, is a legal definition that forms the rule for this issue. In short, Recklessness involves a higher level of culpability than criminal\nnegligence, but requires less culpability than intentional actions. The State establishes a cause of action for reckless manslaughter when it proves the defendant caused the victim's death and the defendant: consciously disregarded a substantial and unjustified risk that he would cause the death of another",
              "size": 28
            }
          ,
            {
              "block_name": "defines recklessness",
              "score": 0.7930588722229004,
              "short_description": "In defining recklessness, the court contrasts recklessness with criminal negligence.",
              "long_description": "As it defines recklessness, the court contrasts recklessness with criminal negligence, noting that both recklessness and negligence require a gross deviation from the standard of care, but recklessness requires subjective awareness of that risk while criminal negligence only requires a failure to perceive the risk",
              "size": 20
            }
          ,
            {
              "block_name": "recklessness requires subjective awareness",
              "score": 0.7471840977668762,
              "short_description": "The Court reasoned that Recklessness requires subjective awareness of a risk",
              "long_description": "Bingo! Recklessness requires subjective awareness of a risk. This is a key point the court should have expounded on",
              "size": 42
            }
          ,
            {
              "block_name": "Recklessness",
              "score": 0.7325237393379211,
              "short_description": "Recklessness is one of the rules the Court had to evaluate and establish for this case.",
              "long_description": "Recklessness is one of the rules the Court had to establish for this case. Recklessness involves a higher level of culpability than criminal\r\nnegligence, but requires less culpability than intentional actions.",
              "size": 12
            }
          ,
            {
              "block_name": "contrasts recklessness",
              "score": 0.674532949924469,
              "short_description": "The court contrasts recklessness with criminal\r\nnegligence",
              "long_description": "The court contrasts recklessness with criminal negligence, noting that both recklessness and negligence require a gross deviation from the standard of care.",
              "size": 22
            }
        ]
      }
  )
}
