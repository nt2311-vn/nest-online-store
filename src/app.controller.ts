import { Controller, Get, Render } from "@nestjs/common";

@Controller()
export class AppController {
	@Get("/")
	@Render("index")
	index() {
		return {
			title: "Home Page - Oneline Store",
		};
	}

	@Get("/about")
	@Render("about")
	about() {
		const viewData = [];
		viewData["description"] = "This is an about page...";
		viewData["author"] = "Developed by Toan";
		const data1 = "About us - Online Store";

		return {
			title: data1,
			subtitle: "About us",
			viewData: viewData,
		};
	}
}
