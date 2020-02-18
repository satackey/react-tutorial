import React from 'react'
import Square from './Square'

export default class Board extends React.Component { 
    renderSquare(i) {
        return <Square value={i}/>
    }

    render() {
        const status = 'Next player: X'

        return (
            <div>
                <div className="status">{status}</div>
                {
                    [0,3,6].map(iRow => (
                        <div className="board-row">
                            {
                                [0,1,2].map(iCol => this.renderSquare(iRow+iCol))
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
}