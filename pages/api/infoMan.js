// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name": "Mr Guide",
    "title": "People v. Hall",
    "description": "This Knowzee knows all about Nathan Hall (defendant), a trained ski racer and ski-resort employee, was skiing very fast down Vail mountain with his ski tips up and his arms out to his sides to maintain balance. Hall collided with Allen Cobb when Hall flew off a knoll and was unable to stop himself or regain control. Cobb died as a result of the severe head and brain injuries he sustained in the collision. Hall was charged with felony reckless manslaughter. After a preliminary hearing to determine whether there was sufficient probable cause to charge Hall with a felony, the county court found that Hall had been skiing too fast for the conditions, but that this conduct did not involve a substantial and unjustifiable risk of death and did not rise to the level of dangerousness required under state law. The court therefore dismissed the manslaughter charge. On appeal, the district court affirmed the county court's decision. The district court held although skiing too fast for the conditions might involve a substantial risk of injury, the conduct did not involve a substantial risk of death. In other words, an ordinarily prudent person would not think that skiing too fast for the conditions created at least a 50 percent chance of someone dying. Thus, the district court agreed that the prosecution failed to establish probable cause. The Colorado Supreme Court granted certiorari."
  })
}
