# EventCard

`EventCard` is a row element for events list displayed in the home screen

## Props

- `event` - event object from the event list
- `onPress` - onPress event when clicked on row item

## Example

```ts
// EventCard.tsx
...
import EventCard from 'components/EventCard';

export const EventList = () => (
  ...
  <EventCard event="{item}" onPress={onPressEventRow}/>
  ...
);
```
