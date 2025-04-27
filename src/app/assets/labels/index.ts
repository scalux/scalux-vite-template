import { Label, Paragraph, RawText, Title } from "../../display/texts";
import { Labels, selectors } from "../../state";

export const { connectLabels, mkUseLabel, getLabel } = Labels({
  options: ["en", "fr"],
  fallBack: "en",
  items: {
    add: { en: "Add", fr: "Ajouter" },
    delete: { en: "Delete", fr: "Supprimer" },
    undo: { en: "Undo", fr: "Annuler" },
    redo: { en: "Redo", fr: "Rétablir" },
    todoAppTitle: "Todo List",
    noTasksYet: { en: "No tasks yet!", fr: "Pas de tâches pour le moment !" },
    newTask: { en: "New task …", fr: "Nouvelle tâche..." },
    netWorkError: {
      en: "Simulated network error while fetching todos. Reload the page!",
      fr: "Erreur réseau simulée à la récupération des tâches. Rechargez la page !",
    },
  },
});

const useLabel = mkUseLabel(selectors.pick.ui.language);

const AppRawText = connectLabels({
  language: selectors.pick.ui.language,
  render: RawText,
});

const AppLabel = connectLabels({
  language: selectors.pick.ui.language,
  render: Label,
});

const AppTitle = connectLabels({
  language: selectors.pick.ui.language,
  render: Title,
});

const AppParagraph = connectLabels({
  language: selectors.pick.ui.language,
  render: Paragraph,
});

export { AppRawText, AppLabel, AppTitle, AppParagraph, useLabel };
