# Smart Contract Audits

Overlay’s v1 contracts have been audited twice, at first by [Spearbit](https://spearbit.com/) and then [Least Authority](https://leastauthority.com/).

<table>
  <tr>
   <td><strong>Auditor</strong>
   </td>
   <td><strong>Date</strong>
   </td>
   <td><strong>Report</strong>
   </td>
  </tr>
  <tr>
   <td>Spearbit
   </td>
   <td>May 5 2022
   </td>
   <td><a href="https://github.com/spearbit/portfolio/blob/master/pdfs/Overlay-Spearbit-Security-Review.pdf">Spearbit Overlay Security Review</a>
   </td>
  </tr>
  <tr>
   <td>Least Authority
   </td>
   <td>June 8 2022
   </td>
   <td><a href="https://github.com/overlay-market/v1-core/blob/main/audits/leastauthority/audit.pdf">Least Authority Security Audit Report</a>
   </td>
  </tr>
</table>

## _Spearbit_

The Spearbit Overlay Security Review took place over a course of 23 days and reviewed the Overlay market contracts found [here](https://github.com/overlay-market/). Spearbit found 31 issues in this review, out of which 21 issues were gas optimization and informational issues. No critical risk issues were found.

<table>
  <tr>
   <td><strong>Type</strong>
   </td>
   <td><strong>Number of Issues</strong>
   </td>
   <td><strong>Status</strong>
   </td>
  </tr>
  <tr>
   <td>Critical Risk
   </td>
   <td>0
   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>High Risk
   </td>
   <td>2
   </td>
   <td>Fixed
   </td>
  </tr>
  <tr>
   <td>Medium Risk
   </td>
   <td>2
   </td>
   <td>Fixed
   </td>
  </tr>
  <tr>
   <td>Low Risk
   </td>
   <td>5
   </td>
   <td>Fixed
   </td>
  </tr>
</table>

## _Least Authority_

Least Authority’s initial code review took place between April 4 2022 and May 9 2022, and reviewed the code repository found [here](https://github.com/overlay-market/v1-core). Least Authority’s report has several comments on their methodology and Overlay’s code.

Least Authority made 9 suggestions to Overlay, of which 4 were resolved by Overlay. Five of these suggestions were related to code quality and best practices, of which 4 were resolved. 3 of these suggestions were related to system design and testing. The last suggestion was related to better documentation for the protocol, which Overlay is in the process of resolving.

There are some selected excerpts below:

From the “General Comments” section:

>_“…Our team attempted to force existing positions to become liquidatable by executing a flash loan attack. The attack attempted to build large subsequent positions that would cause the existing positions to lose value. However, the attack was thwarted by the circuit breaker defense. We observed that the risk parameters maintenanceMarginFraction and liquidationFeeRate are critical in preventing flash loan attacks and should be set carefully by a secure governance mechanism._
>
>_We also attempted to create many small positions as an alternative vector to manipulate the value of existing positions but found that the gas cost was prohibitive. Given that the ability to access the feed creation mechanism is unguarded, we explored the potential for griefing attacks but did not identify any issues. Our team found the protocol to be well designed and implemented. However, the project is based on complex finance structures that increased the auditing complexity substantially.”_

From the “System Design” section:

>_“We found that security has been taken into consideration in the design of the Overlay protocol as demonstrated by a careful delineation of roles and the authority granted to them. Our team noted that sufficient input validation has been implemented where appropriate, in addition to mechanisms that hinder attacks, such as caps, spreads, and market-specific parameters set by protocol governance… “_

From the “Code Quality” section:

>_"The Overlay code is well organized and adheres to best practices as demonstrated by optimizing storage space by rationally assigning storage variables, moving logic into libraries to minimize the code, appropriately using the require function to ensure the validity of contract state transitions, and also using interfaces to improve readability and facilitate reasoning about the code by abstracting code functionality."_
