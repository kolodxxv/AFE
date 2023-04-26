import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class LanguageService {
    public setLanguage(language: string): void {
        localStorage.setItem("lang", language);
        location.reload();
    }

    public getLanguage(): any {
        const language: string | null = localStorage.getItem("lang");
        if (language) {
            return language
        } 
        return JSON.parse("en")
    }

}