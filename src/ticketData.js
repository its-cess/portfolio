let tickets = [
  {
    id: 1,
    title: "Create Project Modal Update",
    beforeImage: "/BEFORE-project-modal.png",
    afterImage: "/project-type-toggle.png",
    description: `Originally, when a user tried to create a project, if the client wasn't previously added, a user would have to click the "New client? Create now" button. For this optimization, if a user were to type in the Client Name input, we would check if that client already existed. If the client did not already exist, it would automatically be created from what the user typed. The user could either click the dropdown or press enter to automatically create this new client.`,
    impact:
      "The original modal caused confusion and frustration for the users. There were unnecessary extra clicks needed to add a new client. This optimization reduced the number of clicks and made it much easier and quicker for users to create new clients and actually utilize the product. After the launch of this optimization, the conversion of users selecting a template to actually creating a project from that template increased by 24%!"
  },
  {
    id: 2,
    title: "Mobile Templates Page Optimization",
    beforeImage: "/BEFORE-mobile-templates.png",
    afterImage: "/mobile-templates.png",
    description: `The goal of this optimization was to make it much easier for users to browse the Wethos template library from mobile devices. The top bar was removed, so that more of the templates could initially be seen. The large "request a new template" CTA was removed on mobile, so that users could actually utilize the search function.`,
    impact:
      "The result of this mobile optimization is a much cleaner design. On first glance, the user is able to see more of the templates and only see actions that would be useful to them. After the launch of this optimization, the number of users actually selecting a template from the library on mobile increased by 7%!"
  },
  {
    id: 3,
    title: "Proposal Builder Updates",
    beforeImage: "/BEFORE-proposal-builder.png",
    afterImage: "/proposal-builder.png",
    description: `Users wanting to send a project proposal to clients were confused on how to add their brand name and logo to the proposal. This optimization added the ability for users to add their branding directly from the proposal builder page. Previously, users would have to exit the proposal and visit a completely different page, add the branding, and then return to the proposal builder. A section was added that had an input for the studio name, and a place for a logo image to be uploaded, changed, and deleted directly from the proposal builder. A loading spinner was also added while the image was being uploaded.`,
    impact:
      "This optimization made updating studio branding much more convenient and less confusing for users. It cut down on added clicks and back and forth between pages, helping to streamline the proposal building process for users. After the launch of this optimization, the amount of users copying the proposal share link increased by 5%!"
  },
  {
    id: 4,
    title: "Project Status Tag",
    beforeImage: "/BEFORE-project-status-tag.png",
    afterImage: "/project-status-dropdown.png",
    description: `The goal of this optimization was to allow users to change the status of their projects directly from the table within the projects overview page. Previously, to be able to update the status of a project, a user would have to click into each project individually, change the status, return back to the project overview page, and then click into the next project. This optimizations made the project status tag a dropdown menu.`,
    impact:
      "This optimization drastically cut down the amount of clicks it took for users to update the status of their projects. Most importantly, this cut down on the TIME it took for users to update projects."
  },
  {
    id: 5,
    title: "Brand Page Updates",
    beforeImage: "/BEFORE-brand-page.png",
    afterImage: "/brand-page.png",

    description: `Before this update, the ability to customize a user's studio branding was hidden. When first visiting the page, only a preview of the invoice would show. To add branding, a user would have to click the small "customize" button to open the side bar component that allowed them to do so. Most users who visited this page never saw the "customize" button and were confused on the purpose of this page. This lead to users leaving the page without updating their branding and being unsure of how to actually do so.`,
    impact: `This update removed the small, unnoticed "customize" button and created a component that would always be visible when arriving on this page. This update made it clear what the purpose of this page was and allowed users to properly update their studio branding.`
  },
  {
    id: 6,
    title: "People Page Updates",
    beforeImage: "/BEFORE-people-page.png",
    afterImage: "/people-page.png",

    description: `The goal for the "People" page was mainly to make it more visually appealing. While the search function was important, it took up most of the page. Also, if a user did not upload any pictures, the tops of their cards were gray and gave an unfinished look.`,
    impact: `After the update, the filter function was moved to a button that would open a modal showing all of the possible fields a user could search by. The most widely used filters were "Available" and "Available Soon", so it was updated to apply those filters automatically when first visiting this page. Any users who did not upload pictures, would have the Wethos purple color added to the top of their cards instead of the original gray color. The result is a much more visually appealing and clean look. Also, changing the filter button to a modal allowed more user cards to be visible.`
  },
  {
    id: 7,
    title: "Project Goals Editor",
    beforeImage: "/BEFORE-client-goals.png",
    afterImage: "/project-goals-2.png",

    description: `Another update to the proposal builder was to make updates to the "Client Goals" section. Originally, to add client goals, a user would have to click the edit button, make their edits, and then click save.`,
    impact: `The first update was changing "Client Goals" to "Project Goals" to make it more clear to the user what this section should be used for. We switched out the old editor and added a rich text editor with a placeholder that helped inform the user. With the addition of the rich text editor, users were able to click directly into the editor and immediately start making changes. It reduced the number of clicks necessary to update the project goals, making it more clear and less time consuming. It also added consistency to the page because a rich text editor was already being used to update different sections on this page.`
  }
];

export default tickets;
