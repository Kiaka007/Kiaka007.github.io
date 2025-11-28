---
layout: case-study.html
title: "A Decentralized Data Network for Research"
subhead: "Co-Mapping with Consortia and Stats Bureaus"
description: "Partnering with data consortia Dementias Platform UK (DPUK) and the U.S. Census Bureau’s XD Lab, I facilitated a series of workshops and mapping sessions to uncover the operational, social, and ethical challenges faced by modern day data stewards."
client: "OpenMined"
product_1: "Syft 0.7"
product_2: "PyGrid"
year: "2022"
problem_space: "Data Agency"
method: "Co-Mapping"
role: "Facilitator"
references:
  - label: "OpenMined Website"
    url: "https://openmined.org"
  - label: "Early Access User Study"
    url: "/case-studies/case-study-1/"
  - label: "DPUK Website"
    url: "https://www.dementiasplatform.uk/"
  - label: "U.S. Census XD Group Website"
    url: "https://xd.gov/"
---

#### Background
During Syft’s 0.6-0.7 development I led a research initiative exploring how privacy-enhancing technologies (PETs), such as Differential Privacy, could enable research collaboration in environments where trust was constrained by privacy concerns. Partnering with data consortia Dementias Platform UK (DPUK) and the U.S. Census Bureau’s XD Lab, I facilitated a series of workshops and mapping sessions to uncover the operational, social, and ethical challenges faced by modern data consortia. Then, compared that with the challenges faced by statistic bureaus. Using an ethnographic lens, my aim was to translate the institutional norms, expectations, and roles uncovered into design principles that could then be reimagined for a decentralized, privacy-aware data infrastructure.

***

#### Stakeholder Interviews
I began with stakeholder interviews across multiple organizational layers — speaking with DPUK’s director, head of IT, senior data managers, and senior scientists, as well as the Census Bureau’s chief innovation officer, data protection officer, and researchers. These interviews helped reveal daily frictions and the unique motivators and anxieties surrounding data collaboration within each of their roles. I found that the Census Bureau, due to its inherent directive to handle data, served as a hub for other agencies which meant that a lot of their day to day frictions echoed frictions expressed by DPUK as a data consortia. Following this, I delved further into the inner-workings of data consortia. Together with technical and governance leads from DPUK , we diagramed their research pipeline — from proposal to access, approval to analysis and release, marking challenges along the way. These sessions produced shared visual artifacts — flow diagrams— that became reference points for developing a data consortium pilot.

![Image: Flowchart of data pipeline](/assets/images/portfolio/consortia-map/dpuk-pipeline.PNG)
{% bodys %}*(Image: Flowchart of data pipeline)*{% endbodys %}

***
#### Speculative Network Diagrams
Comparing insights from DPUK and Census Bureau, I developed speculative network diagrams to explore how a data consortia framework might function in a decentralized network. The proposed designs included two node types: Network Nodes (for discovery and triage) and Domain Nodes (for data management). Through co-mapping sessions with DPUK, Census Bureau, and OpenMined’s leadership we iteratively explored roles, permissions, and relationships across these nodes. These exercises formed the basis of an international trade pilot later held between Census and the UN PET Lab (2023 UN PET Guide).

![Image: Annotated network map](/assets/images/portfolio/case-study-1/diagramming_in_process.PNG)
{% bodys %}*(Image: Annotated network map)*{% endbodys %}

These sessions revealed that barriers to collaboration were often cultural rather than technical: unclear definitions of what a privacy breach is, differing accountability standards, and an overall mismatch between the fears that were expressed about data misuse and the policies in place to mitigate or build trust against those fears. To illustrate, many personal fears expressed about data misuse in our interviews, centered on the question: who learned what for what purpose? Yet, the data agreements used to define privacy expectations centered around where the data was being stored and analyzed from. They offered little to no guidance on how to determine if the nature of someone’s research breached privacy expectations or not.

I realized that PySyft held a bigger promise — not just reimaging where data lived, but reimaging what metadata and computational policies could look like. A system that could help owners of data assess who was learning from the data and for what purpose. This relational framing informed a redesign of PySyft’s policies, objects, and hierarchies.

- **Policies —** Together with engineering we remapped what types of expectations could be translated into object policies. For example, the concern of “Who can see this object?” could be translated into visibility settings on our node and dataset objects.
- **Objects —** To help enforce these more contextual questions, we then mapped what metadata different objects needed to have to then trigger the policies. For example, to help answer the question “Who can learn from my data?” we mapped how a Data Owner could group users connected to their node and then enforce rules based on those groups. To illustrate, a Data Owner could now group their own research team under the user group “teammates” and then enforce a policy to allow “teammates” to write, read, and create assets within a dataset.
- **Hierarchies—** Perhaps one of the biggest shifts proposed, was the shift of hierarchy between “Data Requests” and “Project Objects”. In PySyft 0.6 project objects had not been created therefore “Data Requests” were the primary form of interaction between users and nodes. In 0.7 we proposed that “Project Objects” which could then hold contextual information like “Project Aim” be the primary object and take on the parent role with “Data → now Code requests” being the children. The thinking was that a project object could build a first bridge of trust before negotiating the individual queries that comprise the research study.


![Image: Mapping session on new policy types in PySyft 0.7.0](/assets/images/portfolio/case-study-1/types-of-policies.PNG)
{% bodys %}*(Image: Mapping session on new policy types in PySyft 0.7.0)*{% endbodys %}

***

![mage: Mapping request components in PySyft 0.7.0)](/assets/images/portfolio/case-study-1/request_components.PNG)
{% bodys %}*(Image: Mapping request components in PySyft 0.7.0)*{% endbodys %}


#### The Broader Picture
Ultimately, this research reframed how PySyft approached decentralization— not as a purely technical goal, but as a social architecture of trust. Combining learnings from our [Early Access research initiative](/case-studies/case-study-1/), we reframed our adoption strategy. If PETs literacy required experimentation then trust required collaborative sense-making. We evolved our partner relationships from that of being service-providers to that of being co-creators, our product from being a platform to being infrastructure, and our pilot efforts from being research-level feats to being deployments of different sandbox spaces so that those in the academic, NGO, or statistic bureau communities could learn, build, and push their own visions of the future for data collaboration. Some examples of pilots informed by this work are: an [international trade pilot](https://unstats.un.org/bigdata/task-teams/privacy/guide/) with the UN PET Lab and an [AI Transparency pilot](https://openmined.org/blog/new-research-shows-promise-for-safe-secure-private-auditing-of-social-media-algorithms/) with the Christchurch Call Initiative.

![Image: UN PET Lab Pilot network map](/assets/images/portfolio/case-study-1/fdn-un-pet-lab-pilot.jpg)
{% bodys %}*(Image: UN PET Lab Pilot network map)*{% endbodys %}

![Image: Proposal for algorithmic transparency pilot node setup](/assets/images/portfolio/case-study-1/alg_trans_map.jpg)
{% bodys %}*(IImage: Proposal for algorithmic transparency pilot node setup)*{% endbodys %}