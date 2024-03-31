## About

This is a **dynamic** [Next.js](https://nextjs.org/) starter. Unlike other starters, you can customize your starting point a lot faster.

## Difference

You may find a lot of stater projects, as example you may find a starter for "NextJs," "TypeScript," "MUI," and "Redux Toolkit," but you want to use "TailwindCSS" instead of "MUI." In this case, as the starter is static, it may become useless. "NextInit," on the other hand, keeps each concept on a separate branch. This means you have a clean and updated version of everything. To have a starter like the one mentioned above, you can do these steps:

1. Create your repository.
2. Pull & merge the "core" branch (For NextJs and TypeScript).
3. Pull & merge the "styling-tailwindcss" branch.
4. Pull & merge the "state-redux" branch.
5. Pull & merge the "state-redux-toolkit" branch.

## Usage

Steps to follow:

1. Create your repository (An **empty** repository is recommended).
2. Add a remote named "nextinit" to your project by running `git remote add nextinit https://github.com/HPouyanmehr/nextinit`.
3. To add NextJs and TypeScript run `git pull nextinit core`
4. Install dependencies `npm i`
5. Run the merge command for the branches you need ([Check the list](#branches)).

## Branches

Here is the list of categories:

- [Styling](#styling)

### Styling

#### Tailwind CSS

1. Make sure you've added the remote properly(Step 2 of [usage](#usage)).
2. Run the following command to add [Tailwind CSS](https://tailwindcss.com/) to your project.

```bash
  git pull nextinit styling-tailwind-css
```

3. Install dependencies by `npm i`
4. Run your project again.
