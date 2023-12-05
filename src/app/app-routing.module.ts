import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StartPageComponent } from './shared/pages/start-page/start-page.component';
import { AvatarSelectionPageComponent } from './shared/pages/avatar-selection-page/avatar-selection-page.component';
import { TopicSelectionPageComponent } from './shared/pages/topic-selection-page/topic-selection-page.component';
import { LearningAboutPageComponent } from './shared/pages/learning-about-page/learning-about-page.component';
import { PuzzleChallengePageComponent } from './shared/pages/puzzle-challenge-page/puzzle-challenge-page.component';

const routes : Routes = [
    {
        path: '',
        component: StartPageComponent
    },
    {
        path: 'avatar-selection',
        component: AvatarSelectionPageComponent
    },
    {
        path: 'topic-selection',
        component: TopicSelectionPageComponent
    },
    {
        path: 'learning-about-topic',
        component: LearningAboutPageComponent
    },
    {
        path: 'puzzle-challenge',
        component: PuzzleChallengePageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}