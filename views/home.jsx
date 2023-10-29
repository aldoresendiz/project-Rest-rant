const React = require('react');
const Def = require('./default');

function home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg" alt="Nguyen salad!" width="200" height="200"></img>
                    <div>
                        Photo by <a href="https://unsplash.com/@pwign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anh Nguyen</a> on <a href="https://unsplash.com/photos/vegetable-and-meat-on-bowl-kcA-c3f_3FE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home;