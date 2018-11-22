import React from "react";
import Highcharts from "highcharts";
import isEmpty from "lodash.isempty";
import PropTypes from "prop-types";

const noop = () => {};

export class HighchartsCmp extends React.Component {
  static propTypes = {
    options: PropTypes.object.isRequired,
    chartRef: PropTypes.func,
    isMap: PropTypes.bool
  };

  static defaultProps = {
    options: {},
    oneToOne: true,
    chartRef: noop
  };

  container = React.createRef();
  chart = null;

  componentDidMount() {
    if (!isEmpty(this.props.options)) {
      this.drawChart();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      !isEmpty(this.props.options) &&
      this.props.options !== prevProps.options
    )
      if (this.chart) {
        this.chart.update({ ...this.props.options }, true, this.props.oneToOne);
      } else {
        this.drawChart();
      }
  }

  drawChart = () => {
    if (this.props.isMap) {
      this.chart = Highcharts.mapChart(
        this.container.current,
        this.props.options
      );
    } else {
      this.chart = Highcharts.chart(this.container.current, this.props.options);
    }
    this.props.chartRef(this.chart);
  };

  componentWillUnmount() {
    this.chart && this.chart.destroy();
  }

  render() {
    const { isMap, options, oneToOne, chartRef, ...divProps } = this.props;
    return (
      <div ref={this.container} {...divProps}>
        {this.props.children}
      </div>
    );
  }
}
