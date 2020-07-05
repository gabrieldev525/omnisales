import React from 'react'
import { Tabs, Tab, Panel } from '@bumaga/tabs'
import '../../static/css/leads.scss'
import TableLead from './lead';

export default () => (
  <Tabs className="tabs">
    <div>
      <Tab><button className="tab1">Lista de leads</button></Tab>
      <Tab><button className="tab2">Configurações</button></Tab>
    </div>

    <Panel><p><TableLead /></p></Panel>
    <Panel><p>Esse queima</p></Panel>
  </Tabs>
);
 