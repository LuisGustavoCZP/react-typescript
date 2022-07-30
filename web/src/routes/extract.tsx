/* eslint-disable react/react-in-jsx-scope */
import { Route } from 'react-router-dom';
import { Public, Private } from '.';
import { Navigator } from '../components/navigator';
import { ExtractPage } from '../pages/';

export function ExtractRoute ()
{
    return (
        <Route path="/extract" element=
        {  
            <Private>
                <><Navigator /><ExtractPage /></>
            </Private>
        } />
    );
}