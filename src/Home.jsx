import { Box, Button, Card, Stack, Text, TextField } from '@shopify/polaris';

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrease, decreaseBy, increase, increaseBy, reset } from './Redux/Counter/CounterSlice';

const Home = () => {
  const state = useSelector(state => state.counter)
  const dispatch = useDispatch();

  const [input, setInput] = useState({ inc: '', dsc: '' });

  return (
    <Box shadow={"card"}>
      <Stack vertical>
        <Card sectioned>
          <Text variant='headingXl' as='h4' alignment='center'>
            Counter : {state.count}
          </Text>
        </Card>
        <Card sectioned>
          <Stack alignment='center' distribution='center'>
            <Button primary onClick={() => dispatch(increase())} > Increase </Button>
            <Button onClick={() => { dispatch(reset()); setInput({ inc: '', dsc: '' }) }}> Reset </Button>
            <Button destructive onClick={() => dispatch(decrease())}> Decrease</Button>
          </Stack>
        </Card>
        <Card sectioned>
          <Card sectioned>
            <TextField label='Increase By' type='number' value={input.inc} onChange={(e) => setInput({ ...input, inc: e })} />
            <br />
            <Button primary onClick={() => {dispatch(increaseBy(Number(input.inc)));setInput({...input,inc:''})}}> Increase </Button>
          </Card>
          <Card sectioned>
            <TextField label='Decrease By' type='number' value={input.dsc} onChange={(e) => setInput({ ...input, dsc: e })} />
            <br />
            <Button destructive onClick={() => {dispatch(decreaseBy(Number(input.dsc)));setInput({...input,dsc:''})}}> Decrease </Button>
          </Card>
        </Card>
      </Stack>
    </Box>
  )
}

export default Home