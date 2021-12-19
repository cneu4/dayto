import React from 'react'
import {auth} from './firebase-config'
import {Button} from '@material-ui/core'

function SignOut(){
    return (
        <div style={{
            display: 'flex', justifyContent: 'left', position: 'fixed', width: '7%', backgroundColor: '#FAFAFA', top: 0, right: 0, borderBottom: 'solid 1px lightgray', borderRight: 'solid 1px lightgray', zIndex: '10'
        }}>
            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => auth.signOut()}>Ausloggen</Button>
        </div>
    )
}

export default SignOut