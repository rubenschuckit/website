import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import { Row, Col } from '~components/common/grid'
import mapStyles from './map.module.scss'

const states = [
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    'ME',
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    'WI',
    null,
    null,
    null,
    'VT',
    'NH',
  ],
  [
    null,
    null,
    'WA',
    'ID',
    'MT',
    'ND',
    'MN',
    'IL',
    'MI',
    null,
    'NY',
    'MA',
    null,
  ],
  [
    null,
    null,
    'OR',
    'NV',
    'WY',
    'SD',
    'IA',
    'IN',
    'OH',
    'PA',
    'NJ',
    'CT',
    'RI',
  ],
  [
    null,
    null,
    'CA',
    'UT',
    'CO',
    'NE',
    'MO',
    'KY',
    'WV',
    'VA',
    'MD',
    'DE',
    null,
  ],
  [
    null,
    null,
    null,
    'AZ',
    'NM',
    'KS',
    'AR',
    'TN',
    'NC',
    'SC',
    'DC',
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    'OK',
    'LA',
    'MS',
    'AL',
    'GA',
    null,
    null,
    null,
  ],
  [
    'GU',
    'MP',
    'HI',
    'AK',
    null,
    'TX',
    null,
    null,
    null,
    null,
    'FL',
    'PR',
    'VI',
  ],
  [
    null,
    null,
    'AS',
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
]

const ChartMap = ({ history, current }) => {
  const stateStatus = {}
  history.forEach(row => {
    const today = current.find(item => item.state === row.state)
    stateStatus[row.state] =
      (today.positiveIncrease - row.positiveIncrease) / row.positiveIncrease
  })
  const totalRising = Object.values(stateStatus).filter(item => item > 0.1)
    .length
  const totalFalling = Object.values(stateStatus).filter(item => item < -0.1)
    .length
  const totalUnchanged =
    Object.keys(stateStatus).length - totalRising - totalFalling
  return (
    <Row className={mapStyles.row}>
      <Col width={[4, 6, 8]}>
        <Link to="#skip-map" className={mapStyles.skipLink}>
          Skip state map
        </Link>
        <div className={mapStyles.map}>
          <h3 className={mapStyles.heading}>New cases 14-day average</h3>
          {states.map(line => (
            <div>
              {line.map(state => (
                <div
                  className={classnames(
                    mapStyles.state,
                    state && mapStyles.hasState,
                    stateStatus[state] > 0.1 && mapStyles.rising,
                    stateStatus[state] < 0.1 && mapStyles.falling,
                  )}
                >
                  {state && (
                    <>
                      <span className="a11y-only">In </span>
                      {state}
                      <span className="a11y-only">
                        , cases are{' '}
                        {stateStatus[state] > 0 &&
                          stateStatus[state] <= 0.1 && <>rising</>}
                        {stateStatus[state] > 0.1 && <>rising</>}{' '}
                        {stateStatus[state] < 0 && <>falling</>}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Col>
      <Col width={[4, 6, 4]}>
        <p className={mapStyles.mapLegend} id="skip-map">
          Cases are{' '}
          <span className={classnames(mapStyles.legend, mapStyles.rising)}>
            rising
          </span>{' '}
          in {totalRising} states,{' '}
          <span className={mapStyles.legend}>staying the same</span> in{' '}
          {totalUnchanged} states, and{' '}
          <span className={classnames(mapStyles.legend, mapStyles.falling)}>
            falling
          </span>{' '}
          in {totalFalling} states.
        </p>
      </Col>
    </Row>
  )
}

export default ChartMap
