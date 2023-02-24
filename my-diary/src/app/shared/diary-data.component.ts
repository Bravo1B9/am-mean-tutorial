import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { DiaryEntry } from "./diary-entry.model";

@Injectable({ providedIn: "root" })
export class DiaryDataService {

  diarySubject = new Subject<DiaryEntry[]>();

  diaryEntries: DiaryEntry[] = [
    new DiaryEntry("Jan 1st", "Entry 1"),
    new DiaryEntry("Jan 2nd", "Hello World"),
    new DiaryEntry("Jan 3rd", "Hello Mars")
  ];

  onDelete(index: number) {
    this.diaryEntries.splice(index, 1);
    this.diarySubject.next(this.diaryEntries);
  }

  onAddDiaryEntry(dairyEntry: DiaryEntry) {
    this.diaryEntries.push(dairyEntry);
    this.diarySubject.next(this.diaryEntries);
  }

  getDiaryEntry(index: number) {
    return {...this.diaryEntries[index]};
  }

  onUpdateEntry(paramId: number, newEntry: DiaryEntry) {
    this.diaryEntries[paramId] = newEntry;
    this.diarySubject.next(this.diaryEntries);
  }
  
}