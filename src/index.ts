import { Application } from 'probot' // eslint-disable-line no-unused-vars

const users = ['hreinberger', 't-kuchel', 'fjbender'];

export = (app: Application) => {
  app.on('issues.opened', async (context) => {
    const assignees = context.issue({ assignees: users })
    await context.github.issues.addAssignees(assignees)
  })
}
