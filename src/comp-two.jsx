import React from 'react';

export class HelloWorld extends React.Component {
  render() {

    let model = JSON.stringify(this.props.model);
    let session = JSON.stringify(this.props.session);
    return <table>
      <tbody>
        <tr>
          <th>model</th>
          <th>session</th>
        </tr>
        <tr>
          <td>{model}</td>
          <td>{session}</td>
        </tr>
      </tbody>
    </table>;
  }
}
