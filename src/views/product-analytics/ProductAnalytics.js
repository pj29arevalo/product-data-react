import { React, useState } from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton
} from '@coreui/react'

import PickDate from '../../components/PickDate'
import CustomDropdown from '../../components/CustomDropdown'
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'datatables.net-responsive-dt';

DataTable.use(DT);

const ProductAnalytics = () => {

  const selectColumnsDropdown = [
    { label: 'Product Name', id: 'product_name', selected: true },
    { label: 'Total Sales', id: 'total_sales', selected: true },
    { label: 'Orders', id: 'orders' },
    { label: 'QTY Sold', id: 'qty_sold' },
    { label: 'Product Costs', id: 'product_costs', selected: true },
    { label: 'Product Costs %', id: 'product_costs_percent' },
    { label: 'VAT', id: 'vat', selected: true },
    { label: 'Marketing', id: 'marketing', selected: true },
    { label: 'ROAS', id: 'roas' },
    { label: 'Fees', id: 'fees', selected: true },
    { label: 'Refunds', id: 'refunds', selected: true },
    { label: 'Refunds %', id: 'refunds_percent' },
    { label: 'Gross Margin', id: 'gross_margin' },
    { label: 'Gross Margin (Order)', id: 'gross_margin_order' },
    { label: 'Break Even ROAS', id: 'break_even_roas' },
    { label: '(Forecast) Refunds %', id: 'forecast_refunds_percent' },
    { label: 'Profit', id: 'profit', selected: true },
    { label: 'Profit %', id: 'profit_percent', selected: true }
  ]

  const [tableData, setTableData] = useState([
    [
      'Elégante Robe de Soirée Monochrome Fent',
      '121.47 €',
      '35.4 €',
      '0 €',
      '0 €',
      '$4.63 €',
      '0 €',
      '67.05 %',
      '81.44 €',
    ],
    [
      'Velvetron - Veste en velours côtelé',
      '121.47 €',
      '35.4 €',
      '0 €',
      '0 €',
      '$4.63 €',
      '0 €',
      '67.05 %',
      '81.44 €',
    ],
    [
      'à double boutonnage Baily',
      '121.47 €',
      '35.4 €',
      '0 €',
      '0 €',
      '$4.63 €',
      '0 €',
      '67.05 %',
      '81.44 €',
    ],
    [
      'CRIPES - Warmes, süßes Sweatshirt für Weihnachten',
      '121.47 €',
      '35.4 €',
      '0 €',
      '0 €',
      '$4.63 €',
      '0 €',
      '67.05 %',
      '81.44 €',
    ],
    [
      'Sac à bandoulière design spacieux tissé Cripes, l',
      '121.47 €',
      '35.4 €',
      '0 €',
      '0 €',
      '$4.63 €',
      '0 €',
      '67.05 %',
      '81.44 €',
    ],
  ]);

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Product Data Analytics Table</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol>
                  <div className="mb-2">Select time period</div>
                  <PickDate />
                </CCol>
                <CCol>
                  <div className="mb-2">Auto & Manual Assignment</div>
                  <CButton color="primary" size='lg'>Ads Assignment</CButton>
                </CCol>
                <CCol>
                  <div className="mb-2">Customize Table</div>
                  <CustomDropdown buttonText="Select Columns" content={selectColumnsDropdown} />
                </CCol>
              </CRow>
              <DataTable 
                data={tableData} 
                className="display"
                options={{
                  responsive: true,
                  select: true,
                }}
              >
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Total Sales</th>
                    <th>Product Costs</th>
                    <th>VAT</th>
                    <th>Marketing</th>
                    <th>Fees</th>
                    <th>Refunds</th>
                    <th>Profit %</th>
                    <th>Profit</th>
                  </tr>
                </thead>
              </DataTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ProductAnalytics
