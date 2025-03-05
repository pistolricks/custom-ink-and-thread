import { createListCollection } from '@ark-ui/solid/collection'

const listCollection = createListCollection({
    items: [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
    ],
})

console.log(listCollection.items) // [{ label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' }]

const item = listCollection.find('banana')

console.log(item) // { label: "Banana", value: "banana" }

const items = listCollection.findMany(['apple', 'banana'])

console.log(items) // [{ label: "Apple", value: "apple" }, { label: "Banana", value: "banana" }]

const nextValue = listCollection.getNextValue('apple')

console.log(nextValue) // banana

const previousItem = listCollection.getPreviousValue('banana')

console.log(previousItem) // apple

console.log(listCollection.firstValue) // apple

console.log(listCollection.lastValue) // banana

const hasValue = listCollection.has('apple')

console.log(hasValue) // true


const listCollectionType = createListCollection({
    items: [
        { id: 1, name: 'apple' },
        { id: 2, name: 'banana' },
        { id: 3, name: 'cherry' },
    ],
    itemToString: (item) => item.name,
    // itemToValue: (item) => item.id,
})


const listCollectionDisable = createListCollection({
    items: [
        { id: 1, name: 'apple' },
        { id: 2, name: 'banana' },
        { id: 3, name: 'cherry' },
    ],
    isItemDisabled: (item) => item.id === 2,
})

const fromIndex = 1 // Banana
const toIndex = 0 // Apple
listCollection.reorder(fromIndex, toIndex)

console.log(listCollection.items) // [{ label: "Banana", value: "banana" }, { label: "Apple", value: "apple" }]
