import React from "react";

export default props => (
    <div>
        <section className="content-header">
            <h1>
                {props.title}
                <small>{props.subTitle}</small>
            </h1>
        </section>
        <section className="content">
            {props.children}
        </section>
    </div>
)