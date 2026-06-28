# Module 2 - Activity 3 - State, Events, and Lists

> **Builds on Activity 2.** The new idea is **state**, so take it slowly. You
> are **done when `npm test` is all green**.

Now your components come alive. You will add **state** (data that changes),
**event handlers** (responding to clicks and typing), **conditional rendering**
(showing things based on a condition), and **lists** (rendering an array).

## Read first

The concepts for this activity live in your **course workspace repo**:

- `content/m2-react/README.md` -> **Activity 3** section
- `content/react-theory/04-hooks-mental-model.md` (state, the rules of hooks)
- `content/react-theory/02-virtual-dom-and-rendering.md` (why lists need keys)

## What to do

### 1. Fill in your details

Open [`student.json`](student.json) and fill in every field (keep it identical
to your other activities; `classCode` must match your repo name).

### 2. Implement the components

Each file in [`src/components/`](src/components/) describes its concept and the
exact requirement. Replace each `// TODO` (and the `return null`) so the tests
pass.

| File | Builds | Concept |
| --- | --- | --- |
| [`Counter.jsx`](src/components/Counter.jsx) | a +/- counter | `useState` + events |
| [`Toggle.jsx`](src/components/Toggle.jsx) | a show/hide message | conditional rendering |
| [`TodoList.jsx`](src/components/TodoList.jsx) | add items to a list | controlled input + lists |

Do not change file names or the `export default`s.

## Set up your repo

1. **Use this template -> Create a new repository**, owner **`HAU-6APSI`**.
2. Name it `m2a3-<classcode>-yourname`, **Private**.
3. Clone your copy and `npm install`.

```bash
git clone https://github.com/HAU-6APSI/m2a3-<classcode>-yourname.git
cd m2a3-<classcode>-yourname
npm install
```

## Running the app and the tests

```bash
npm run dev          # see it in the browser (http://localhost:5173)
npm test             # run the tests once (each passing test is a point)
npm run test:watch   # re-run on every save
```

> **Write your code in `src/` only.** The files in `test/` are how your work is
> graded.

## Submit

Pushing is submitting:

```bash
git add -A
git commit -m "✨ Activity 3 complete"
git push
```

Then open the **Actions** tab, open the latest **Autograde** run, and confirm
the green check, the "N / N tests passed" summary, and the linked screenshot of
your running app.
