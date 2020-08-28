import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import smartypants from 'smartypants'
import StateSeparate from './state-separate'
import StateCombined from './state-combined'
import statesStyle from './states.module.scss'

const CrdtDashboardStates = () => {
  const data = useStaticQuery(graphql`
    query {
      allCovidRaceDataCombined(
        filter: { state: { ne: "US" } }
        sort: { fields: stateName }
      ) {
        nodes {
          aianANHPIDeathNotes
          aianANHPIPosNotes
          aianDeathCaution
          aianDeathDispFlag
          aianDeathNotes
          aianDeaths
          aianPctDeath
          aianPctPop
          aianPctPos
          aianPosCaution
          aianPosDispFlag
          aianPositives
          aianPosNotes
          anyDeathData
          anyPosData
          asianANHPIDeathNotes
          asianANHPIPosNotes
          asianDeathCaution
          asianDeathDispFlag
          asianDeathNotes
          asianDeaths
          asianPctDeath
          asianPctPop
          asianPctPos
          asianPosCaution
          asianPosDispFlag
          asianPositives
          asianPosNotes
          blackANHPIDeathNotes
          blackANHPIPosNotes
          blackDeathCaution
          blackDeathDispFlag
          blackDeathNotes
          blackDeaths
          blackPctDeath
          blackPctPop
          blackPctPos
          blackPosCaution
          blackPosDispFlag
          blackPositives
          blackPosNotes
          id
          knownRaceEthDeath
          knownRaceEthPos
          latinXDeathCaution
          latinXDeathDispFlag
          latinXDeathNotes
          latinXDeaths
          latinXPctDeath
          latinXPctPop
          latinXPctPos
          latinXPosCaution
          latinXPosDispFlag
          latinXPositives
          latinXPosNotes
          name: stateName
          nhpiANHPIDeathNotes
          nhpiANHPIPosNotes
          nhpiDeathCaution
          nhpiDeathDispFlag
          nhpiDeathNotes
          nhpiDeaths
          nhpiPctDeath
          nhpiPctPop
          nhpiPctPos
          nhpiPosCaution
          nhpiPosDispFlag
          nhpiPositives
          nhpiPosNotes
          otherANHPIDeathNotes
          otherANHPIPosNotes
          otherDeathCaution
          otherDeathDispFlag
          otherDeathNotes
          otherDeaths
          otherPctDeath
          otherPctPop
          otherPctPos
          otherPosCaution
          otherPosDispFlag
          otherPositives
          otherPosNotes
          state
          stateName
          twoANHPIDeathNotes
          twoANHPIPosNotes
          twoDeathCaution
          twoDeathDispFlag
          twoDeathNotes
          twoDeaths
          twoPctDeath
          twoPctPop
          twoPctPos
          twoPosCaution
          twoPosDispFlag
          twoPositives
          twoPosNotes
          unknownRaceEthDeath
          unknownRaceEthPos
          whiteANHPIDeathNotes
          whiteANHPIPosNotes
          whiteDeathCaution
          whiteDeathDispFlag
          whiteDeathNotes
          whiteDeaths
          whitePctDeath
          whitePctPop
          whitePctPos
          whitePosCaution
          whitePosDispFlag
          whitePositives
          whitePosNotes
        }
      }
      allCovidRaceDataSeparate(
        filter: { state: { ne: "US" } }
        sort: { fields: stateName }
      ) {
        nodes {
          aianANHPIDeathNotes
          aianANHPIPosNotes
          aianDeathCaution
          aianDeathDispFlag
          aianDeathNotes
          aianDeaths
          aianPctDeath
          aianPctPop
          aianPctPos
          aianPosCaution
          aianPosDispFlag
          aianPositives
          aianPosNotes
          aianSpecialCaseNotes
          anyDeathData
          anyPosData
          asianANHPIDeathNotes
          asianANHPIPosNotes
          asianDeathCaution
          asianDeathDispFlag
          asianDeathNotes
          asianDeaths
          asianPctDeath
          asianPctPop
          asianPctPos
          asianPosCaution
          asianPosDispFlag
          asianPositives
          asianPosNotes
          asianSpecialCaseNotes
          blackANHPIDeathNotes
          blackANHPIPosNotes
          blackDeathCaution
          blackDeathDispFlag
          blackDeathNotes
          blackDeaths
          blackPctDeath
          blackPctPop
          blackPctPos
          blackPosCaution
          blackPosDispFlag
          blackPositives
          blackPosNotes
          blackSpecialCaseNotes
          deathEthData
          deathRaceData
          id
          knownEthDeath
          knownEthPos
          knownRaceDeath
          knownRacePos
          latinXANHPIDeathNotes
          latinXANHPIPosNotes
          latinXDeathCaution
          latinXDeathDispFlag
          latinXDeathNotes
          latinXDeaths
          latinXPctDeath
          latinXPctPop
          latinXPctPos
          latinXPosCaution
          latinXPosDispFlag
          latinXPositives
          latinXPosNotes
          name: stateName
          nhpiANHPIDeathNotes
          nhpiANHPIPosNotes
          nhpiDeathCaution
          nhpiDeathDispFlag
          nhpiDeathNotes
          nhpiDeaths
          nhpiPctDeath
          nhpiPctPop
          nhpiPctPos
          nhpiPosCaution
          nhpiPosDispFlag
          nhpiPositives
          nhpiPosNotes
          nhpiSpecialCaseNotes
          nonhispanicANHPIDeathNotes
          nonhispanicANHPIPosNotes
          nonhispanicDeathCaution
          nonhispanicDeathDispFlag
          nonhispanicDeathNotes
          nonhispanicDeaths
          nonhispanicPctDeath
          nonhispanicPctPop
          nonhispanicPctPos
          nonhispanicPosCaution
          nonhispanicPosDispFlag
          nonhispanicPositives
          nonhispanicPosNotes
          nonhispanicSpecialCaseNotes
          otherANHPIDeathNotes
          otherANHPIPosNotes
          otherDeathCaution
          otherDeathDispFlag
          otherDeathNotes
          otherDeaths
          otherPctDeath
          otherPctPop
          otherPctPos
          otherPosCaution
          otherPosDispFlag
          otherPositives
          otherPosNotes
          otherSpecialCaseNotes
          posEthData
          posRaceData
          state
          twoANHPIDeathNotes
          twoANHPIPosNotes
          twoDeathCaution
          twoDeathDispFlag
          twoDeathNotes
          twoDeaths
          twoPctDeath
          twoPctPop
          twoPctPos
          twoPosCaution
          twoPosDispFlag
          twoPositives
          twoPosNotes
          twoSpecialCaseNotes
          unknownEthDeath
          unknownEthPos
          unknownRaceDeath
          unknownRacePos
          whiteANHPIDeathNotes
          whiteANHPIPosNotes
          whiteDeathCaution
          whiteDeathDispFlag
          whiteDeathNotes
          whiteDeaths
          whitePctDeath
          whitePctPop
          whitePctPos
          whitePosCaution
          whitePosDispFlag
          whitePositives
          whitePosNotes
          whiteSpecialCaseNotes
        }
      }
      disparityNote: contentfulSnippet(
        slug: { eq: "race-dashboard-disparity" }
      ) {
        contentful_id
        childContentfulSnippetContentTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
      comparibleNote: contentfulSnippet(
        slug: { eq: "race-dashboard-not-comparable" }
      ) {
        contentful_id
        childContentfulSnippetContentTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  const states = []
  data.allCovidRaceDataSeparate.nodes.forEach(state => {
    states.push({
      ...state,
      stateSeparate: true,
    })
  })
  data.allCovidRaceDataCombined.nodes.forEach(state => {
    states.push({
      ...state,
      stateSeparate: false,
    })
  })

  return (
    <section>
      {states
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map(state => (
          <div className={statesStyle.state}>
            <h2
              id={`state-${state.state.toLowerCase()}`}
              className={statesStyle.header}
            >
              {state.name}
            </h2>
            <div>
              {state.stateSeparate ? (
                <StateSeparate state={state} />
              ) : (
                <StateCombined state={state} />
              )}
            </div>
          </div>
        ))}
      <div className="js-disabled">
        <div
          id="notes-disparity"
          dangerouslySetInnerHTML={{
            __html: smartypants(
              data.disparityNote.childContentfulSnippetContentTextNode
                .childMarkdownRemark.html,
            ),
          }}
        />
        <div
          id="notes-comparible"
          dangerouslySetInnerHTML={{
            __html: smartypants(
              data.comparibleNote.childContentfulSnippetContentTextNode
                .childMarkdownRemark.html,
            ),
          }}
        />
      </div>
    </section>
  )
}

export default CrdtDashboardStates
