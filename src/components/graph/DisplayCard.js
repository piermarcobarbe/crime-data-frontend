import startCase from 'lodash.startcase'
import pluralize from 'pluralize'
import PropTypes from 'prop-types'
import React from 'react'

import DownloadDataBtn from '../DownloadDataBtn'
import BarChart from './BarChart'
import StackedBarChart from './StackedBarChart'

import { slugify } from '../../util/text'

class DisplayCard extends React.Component {

    render() {
      const { data, place, year } = this.props
      console.log('Create Card:', data)
      let charts = null;
      switch (data.ui_type) {
        case 'basic_table':
          charts = (<BarChart data={data} year={year} />)
          break;
        case 'stacked_table':
            return <StackedBarChart data={data} year={year} />
        default:
          charts = (<p>{data.ui_type} not supported!</p>)
      }


      const download = {
        data: data.data,
        filename: `${place}-leoka-${slugify(data.noun
        )}-${year}.csv`,
      }

      return (
        <div className="mt0 mb2 pb1 fs-18">
          <h2 className="mt0 mb2 sm-mb4 fs-18 sans-serif blue">
            {data.title}
          </h2>
            {charts}
            <DownloadDataBtn
              ariaLabel={`Download ${data.noun} data as a CSV`}
              data={download}
              filename={`${place}-leoka-${slugify(data.noun)}-${year}`}
              text="Download data"
            />
        </div>
      )
    }

}

DisplayCard.propTypes = {
  data: PropTypes.object.isRequired,
  place: PropTypes.string,
  year: PropTypes.number.isRequired,
}

export default DisplayCard