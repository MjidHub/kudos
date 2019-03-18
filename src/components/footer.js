import React, {Component} from 'react';
import StickyFooter from 'react-sticky-footer';

/**
 * @return {boolean}
 */
class Footer extends Component {

    render() {
        return (
            <StickyFooter
                bottomThreshold={50}
                normalStyles={{
                    backgroundColor: "#111",
                    padding: "2rem"
                }}
                stickyStyles={{
                    backgroundColor: "rgba(255,255,255,.8)",
                    padding: "2rem"
                }}
            >
                Wa fen
            </StickyFooter>
        );
    }
}

export default Footer;