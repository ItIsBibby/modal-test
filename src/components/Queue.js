export function Queue(props) {
    let queue = [];
    
    for (let i = 0; i < props.modals.length - 1; i++) {
        queue.push(<div className="queueDot" />)
    };

    return (
        <div className="queue">{queue}</div>
    );
};