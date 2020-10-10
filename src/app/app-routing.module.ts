import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ListuserComponent } from "./listuser/listuser.component";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./listusers/listusers.module").then((m) => m.ListusersPageModule),
  },
  {
    path: "listUsers",
    component: ListuserComponent,
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "listusers",
    loadChildren: () =>
      import("./listusers/listusers.module").then((m) => m.ListusersPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
