import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { expenseCategories, incomeCategories } from '../../../constants/categories';
import { ExpenseTrackerContext } from '../../../context/context';
import { useSpeechContext} from '@speechly/react-client';
// import { FaceTwoTone } from '@material-ui/icons';


import formatDate from '../../../utils/formatDate';
import useStyles from './styles';


const initialState={
    amount: '0',
    type: 'Income',
    category: '',
    date: formatDate(new Date()),
}

const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext);
    const { segment } = useSpeechContext();
    // const words = segment.words;

    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4()};

        addTransaction(transaction);
        setFormData(initialState);
    };

    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;
 
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    {/* {segment && segment.words.map((w) => w.value).join(' ')}  */}
                    {/* up is simplified jsx according to guide but not working*/}
                    {segment ? (
                        <>
                            {segment.words.map((w) => w.value).join(' ')}
                        </>
                    ) : null}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e)=> setFormData({ ...formData, type: e.target.value })}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                        {selectedCategories.map((c) => 
                            <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth defaultValue={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value})}/>
            </Grid>
            <Button className={classes.button} variant='outlined' color='primary' fullWidth onClick={createTransaction}>Create</Button>
        </Grid>
    );
}

export default Form
