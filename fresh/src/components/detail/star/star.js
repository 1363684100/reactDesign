import React from 'react'
import './star.less'

class Star extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            star: 0
        }
    }

    componentDidMount() {
        this.setState({
            star: this.props.star
        })
    }

    //当组件将要接受到新的props的时候执行
    componentWillReceiveProps(nextProps) {
        this.setState({
            star: nextProps.star
        })
    }

    render() {
        return <div className="star-container">
            {[1, 2, 3, 4, 5].map((item, index) => {
                const lightClass = this.state.star >= item ? ' light' : ''
                return <i key={index} className={'icon-star' + lightClass} onClick={this.clickHandle.bind(this, item)}></i>
            })}
        </div>
    }

    clickHandle = (item) => {
        this.setState({
            star: item
        })
    }
}
export default Star