import React from 'react';
import styles from './Select.module.css';
import './Select.module.css';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
      selectorShown: props.selectorShown || false
    };
  }

  componentDidMount() {
    const { options } = this.props;
    options.map((option, i) => {
      if (option.default) {
        this.setState({
          activeItem: i
        });
      }
      return true;
    });
  }

  toggleSelectorShown() {
    this.setState({
      selectorShown: !this.state.selectorShown
    });
  }

  updateSelection(selection, value, event) {
    let tagret = event.target.parentElement.parentElement.children[0];
    let that = this;
    window.onclick = function(event) {
      if (event.target !== tagret) {
        that.setState({
          selectorShown: false
        });
      }
    };
    this.props.changed(value);
    this.toggleSelectorShown();
    const { onSelect, options } = this.props;
    this.setState({
      activeItem: selection,
    }, () => {
      if (typeof onSelect !== 'undefined') onSelect(options[selection].value);
    });
  }

  render() {
    const { selectorShown, activeItem } = this.state;
    return (
      <div className={styles.MySelect} style={{backgroundColor: '#F9F9F9'}}>
        <div
          className={selectorShown === false ? styles.MySelect__selected : styles.MySelect__selected +' '+ styles.select_active}
          onClick={() => this.toggleSelectorShown()}
        >
          {this.props.options[activeItem].text}
        </div>
        {selectorShown &&
        <div className={styles.MySelect__items}>
          {this.props.options.map((option, key) => {
            return (
              <div
                key={`react-custom-select-${key}`}
                onClick={() => this.updateSelection(key, option.value, event)}
              >
                {option.text}
              </div>
            );
          })}
        </div>
        }
      </div>
    );
  }
}