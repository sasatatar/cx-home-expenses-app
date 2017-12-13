import { HtmlElement, Grid, Section, Button, LinkButton } from 'cx/widgets';
import { computable, enableCultureSensitiveFormatting, KeySelection } from 'cx/ui';
import { enableMsgBoxAlerts } from 'cx/widgets';
import { categoryNames } from '../../data/categories';

import Controller from './Controller';

enableCultureSensitiveFormatting();
enableMsgBoxAlerts();

export default <cx>
    <h2 putInto="header">Log</h2>
    <Section
        mod="card"
        style="height: 100%"
        bodyStyle="display: flex; flex-orientation: column"
        controller={Controller}
    >
        <Grid
            records-bind="entries"
            lockColumnWidths
            scrollable
            buffered
            style="flex: 1 0 0%"
            columns={[
                {
                    field: 'date',
                    header: 'Date',
                    format: 'date',
                    sortable: true
                },
                {
                    field: 'description',
                    header: 'Description',
                    style: 'width: 50%'
                },
                {
                    header: 'Category',
                    sortable: true,
                    value: computable("$record.categoryId", id => categoryNames[id])
                },
                {
                    field: 'amount',
                    header: 'Amount',
                    format: "currency;;2",
                    align: 'right',
                    sortable: true
                },
                {
                    header: 'Actions',
                    align: 'center',
                    items: <cx>
                        <LinkButton mod="hollow" href-tpl="~/entry/{$record.id}">
                            Edit
                        </LinkButton>
                        <Button mod="hollow" 
                            onClick="remove"
                            confirm="Are you sure you want to delete this entry?"
                        >
                            Remove
                        </Button>
                    </cx>
                }
            ]}
        />
    </Section>
</cx>
