const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops! Sorry, we cannot find this page!</p>
                <img srcset="https://cdn.vox-cdn.com/thumbor/tHaSqikZhJ0cltXJXZmJCS4yMvU=/0x0:1200x628/320x213/filters:focal(530x176:722x368)/cdn.vox-cdn.com/uploads/chorus_image/image/61147845/Infinity_Wars_Prime_Thanos_1.0.jpg 320w, https://cdn.vox-cdn.com/thumbor/O73trxAqvUI99ZiuBHGqdh_xo9k=/0x0:1200x628/620x413/filters:focal(530x176:722x368)/cdn.vox-cdn.com/uploads/chorus_image/image/61147845/Infinity_Wars_Prime_Thanos_1.0.jpg 620w, https://cdn.vox-cdn.com/thumbor/ZW7kJ6pSJUxM_RIPY7HSpOE-_g4=/0x0:1200x628/920x613/filters:focal(530x176:722x368)/cdn.vox-cdn.com/uploads/chorus_image/image/61147845/Infinity_Wars_Prime_Thanos_1.0.jpg 920w, https://cdn.vox-cdn.com/thumbor/E4MJuixX0z8rj4py3Eso-w0uyig=/0x0:1200x628/1220x813/filters:focal(530x176:722x368)/cdn.vox-cdn.com/uploads/chorus_image/image/61147845/Infinity_Wars_Prime_Thanos_1.0.jpg 1220w, https://cdn.vox-cdn.com/thumbor/q1FZAFqdfwGdlpK9USLvTlWoDnU=/0x0:1200x628/1520x1013/filters:focal(530x176:722x368)/cdn.vox-cdn.com/uploads/chorus_image/image/61147845/Infinity_Wars_Prime_Thanos_1.0.jpg 1520w, https://cdn.vox-cdn.com/thumbor/8u4BZaapoRIQcsGOFcKI4Y4tNJc=/0x0:1200x628/1820x1213/filters:focal(530x176:722x368)/cdn.vox-cdn.com/uploads/chorus_image/image/61147845/Infinity_Wars_Prime_Thanos_1.0.jpg 1820w, https://cdn.vox-cdn.com/thumbor/tzt04Jym1zjU5zUX2K1l4W2wGgw=/0x0:1200x628/2120x1413/filters:focal(530x176:722x368)/cdn.vox-cdn.com/uploads/chorus_image/image/61147845/Infinity_Wars_Prime_Thanos_1.0.jpg 2120w, https://cdn.vox-cdn.com/thumbor/q3tRl0EoGC6nRtJ2leqt184m-Z0=/0x0:1200x628/2420x1613/filters:focal(530x176:722x368)/cdn.vox-cdn.com/uploads/chorus_image/image/61147845/Infinity_Wars_Prime_Thanos_1.0.jpg 2420w" sizes="(min-width: 1221px) 846px, (min-width: 880px) calc(100vw - 334px), 100vw" alt="Thanos’ death in Infinity Wars Prime #1, Marvel Comics (2018). " loading="eager" data-upload-width="1200" width="1200" height="628" src="https://cdn.vox-cdn.com/thumbor/VTl_oYZ3gQdvXzwrm1jOx8ag1Hg=/0x0:1200x628/1200x800/filters:focal(530x176:722x368)/cdn.vox-cdn.com/uploads/chorus_image/image/61147845/Infinity_Wars_Prime_Thanos_1.0.jpg"></img>
                <br/>
                <span>
                    <cite>
                        Gerry Dugan, Mike Deodato Jr./Marvel Comics
                    </cite>
                </span>
            </main>
        </Def>
    )
}

module.exports = error404