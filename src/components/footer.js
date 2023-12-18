import React, { Component } from 'react'
import { Grid, Input, Pagination, Segment } from 'semantic-ui-react'

export default class PaginationExampleControlled extends Component {
  state = { activePage: 1 }

  handleInputChange = (e, { value }) => this.setState({ activePage: value })

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  render() {
    const { activePage } = this.state;

    return (
      <Grid columns={1} verticalAlign='middle' style = {{
        padding : '10px 20px' , 
        width : 600, 
        margin : 'auto'
    }}>
        <Grid.Column>
          <Pagination
            activePage={activePage}
            onPageChange={this.handlePaginationChange}
            totalPages={5}
          />
        </Grid.Column>
      </Grid>
    )
  }
}