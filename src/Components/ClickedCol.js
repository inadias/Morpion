import React, {Component, Fragment} from "react";


    class ClickedCol extends Component{

        render() {

            const element= (<div onClick={this.props.clickHander}className="flex-element col" >

                    {this.props.squareValue}


                </div>
            );
            return(
                <Fragment>
                    {element}
                </Fragment>)
        }
}
export default ClickedCol